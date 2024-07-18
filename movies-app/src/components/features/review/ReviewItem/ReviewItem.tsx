import { Heading, Box, Text, Button, useToast } from "@chakra-ui/react";
import { IReviewItem } from "../../../../typings/ReviewItem.type";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";
import { reviewsDeleteMutator } from "@/fetchers/mutators";

export interface IReviewItemProps {
  reviewItem: IReviewItem
}


export default function ReviewItem ({
  reviewItem
}: IReviewItemProps) {

  const toast = useToast();

  const {trigger} = useSWRMutation(`${swrKeys.reviews}/${reviewItem.id}`, reviewsDeleteMutator, {
    onSuccess: ()=>{
      toast({
        title: 'Yay!',
        description: "You have deleted the review.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
  
      mutate(swrKeys.showReviews(reviewItem.show_id as string));
    },
    onError: ()=>{
      toast({
        title: 'Oops!',
        description: "You cannot delete this review.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      }
  
  });
  
  
  const onSubmit = async (review_id: string) => {  
    await trigger(review_id);
  }

  return (
        <>
          <Heading size="xs" data-test-id="review-description">{reviewItem.comment}</Heading>
          <Text pt="2" fontSize="sm" data-test-id="review-rating">
            {reviewItem.rating}/5
          </Text>
          <Button data-test-id="delete-review-button" onClick={onSubmit}>Delete</Button>
      </>
  );
};
