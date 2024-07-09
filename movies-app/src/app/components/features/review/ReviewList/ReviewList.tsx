import {
  Flex,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

import { IReviewList } from "../../../../../typings/ReviewList.type";

export interface IReviewListProps {
  reviewList?: IReviewList,
  addShowReview: () => void,
  removeShowReview: () => void
}

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
