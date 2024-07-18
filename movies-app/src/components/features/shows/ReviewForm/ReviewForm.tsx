import {
  Flex,
  Button,
  Heading,
  Textarea,
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Alert,
  AlertIcon,
  chakra,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

import { IReviewItem } from "../../../../typings/ReviewItem.type";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { useParams } from "next/navigation";
import { reviewsMutator } from "@/fetchers/mutators";
import { useSWRConfig } from "swr";

 
interface IReviewFormProps {
  addShowReview: (reviewItem: IReviewItem) => void,
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const { mutate } = useSWRConfig()

  const params = useParams();
  const showId = params.id;

  const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid }, reset } = useForm<IReviewItem>();

  const toast = useToast();
  
const {trigger} = useSWRMutation(swrKeys.reviews, reviewsMutator, {
  onSuccess: ()=>{
    reset();
    toast({
      title: 'Yay!',
      description: "You have submitted your review.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    mutate(swrKeys.showReviews(showId as string));
  }

});


const onSubmit = async (data:IReviewItem) => {
  const newData:IReviewItem = {
    comment: data.comment,
    rating: parseFloat(data.rating),
    show_id: data.show_id
  }

  await trigger(newData);
}


return (
  <chakra.form  onSubmit={handleSubmit(onSubmit)}>
    <Heading size="md">Add a review</Heading>
    <FormControl isRequired={true}>
      <FormLabel>Review comment</FormLabel>
      <Textarea  {...register('comment')} placeholder="Your review comment here..." id="reviewDescription" />
  </FormControl>
    <FormControl isRequired={true}>
      <FormLabel>Rating:</FormLabel>
        <NumberInput step={1} min={0} max={5} defaultValue={5}>
          <NumberInputField   {...register("rating")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      <input type="hidden" value={showId} {...register("show_id")} />
    </FormControl>

    <Button marginTop={2} marginBottom={2} colorScheme="blue" type="submit">
      Submit review
    </Button>

  </chakra.form>
);
}