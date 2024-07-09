import {
  Flex,
  Heading,
  Stack,
  StackDivider,
  Textarea,
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

import { IReviewListProps } from "../../../../../typings/ReviewList.type";

export const ReviewList = ({ reviewList }: IReviewListProps) => {
  return (
    <Stack divider={<StackDivider />} spacing="4">
      <Heading marginTop={5} size="md">
        Old reviews
      </Heading>
      {reviewList.map((item, index) => {
        return <ReviewItem key={index} reviewItem={item}></ReviewItem>;
      })}
    </Stack>
  );
};
