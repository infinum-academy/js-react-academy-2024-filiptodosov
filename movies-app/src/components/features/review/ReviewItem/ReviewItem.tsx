import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { IReviewItem } from "../../../../typings/ReviewItem.type";

export interface IReviewItemProps {
  reviewItem: IReviewItem;
  index: number;
  deleteShowReview: (key: number) => void;
}


export default function ReviewItem ({
  reviewItem,
  deleteShowReview,
  index,
}: IReviewItemProps) {
  const onClickHandler = () => {
    deleteShowReview(index);
  };

  return (
        <>
          <Heading size="xs" data-test-id="review-description">{reviewItem.reviewText}</Heading>
          <Text pt="2" fontSize="sm" data-test-id="review-rating">
            {reviewItem.rating}/5
          </Text>
          <Button data-test-id="delete-review-button" onClick={onClickHandler}>Delete</Button>
      </>
  );
};
