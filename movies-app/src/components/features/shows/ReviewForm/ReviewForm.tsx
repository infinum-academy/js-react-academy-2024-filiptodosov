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
} from "@chakra-ui/react";

import { IReviewItem } from "../../../../typings/ReviewItem.type";

interface IReviewFormProps {
  addShowReview: (reviewItem: IReviewItem) => void,
  successLabel: Boolean,
  errorLabel: Boolean
}

export const ReviewForm = ({ addShowReview, successLabel, errorLabel }: IReviewFormProps) => {

  const onClickAddShowHandler = () => {
    
    const reviewDescriptionHTMLElement = document.getElementById("reviewDescription") as HTMLTextAreaElement;
    const reviewRatingHTMLElement = document.getElementById("reviewRating") as HTMLInputElement;
    const newReviewItem: IReviewItem = {
      reviewText: reviewDescriptionHTMLElement.value,
      rating: parseInt(reviewRatingHTMLElement.value, 10),
    };

    addShowReview(newReviewItem);


    reviewDescriptionHTMLElement.value = "";
    reviewRatingHTMLElement.value = "";
  }

  return (
    <Box marginBottom={5}>
      <Heading size="md">Add a review</Heading>
      <Textarea placeholder="Your review text here..." id="reviewDescription" />
      <Text pt="2" fontSize="sm">
        Enter rating:
      </Text>
      <NumberInput
        step={0.5}
        defaultValue={5}
        min={0}
        max={5}
        id="reviewRating"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button marginTop={2} marginBottom={2} colorScheme="blue" onClick={onClickAddShowHandler}>
        Submit review
      </Button>
      {successLabel && <Alert status='success'>
        <AlertIcon />
        You&apos;ve just added a new review!
      </Alert>}

      {errorLabel && <Alert status='error'>
        <AlertIcon />
        The review text and the rating fields are mandatory!
      </Alert>}
    </Box>
  );
};
