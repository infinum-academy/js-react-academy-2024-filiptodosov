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
} from "@chakra-ui/react";

import { IReviewItem } from "../../../typings/ReviewItem.type";

interface IReviewFormProps {
  addShowReview: (reviewItem: IReviewItem) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
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
      <Button marginTop="2" colorScheme="blue" onClick={addShowReview}>
        Submit review
      </Button>
    </Box>
  );
};
