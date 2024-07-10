import {
  Flex,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

import { IReviewList } from "../../../../../typings/ReviewList.type";

import { IReviewItem } from "@/typings/ReviewItem.type";

export interface IReviewListProps {
  reviewList: IReviewList,
  deleteShowReview: (key: number) => void
}

export const ReviewList = ({ reviewList, deleteShowReview }: IReviewListProps) => {
  return (
    <Stack divider={<StackDivider />} spacing="4">
      <Heading marginTop={5} size="md">
        Old reviews
      </Heading>
      {reviewList.reviewItems.map((item: IReviewItem, index: number) => {
        return <ReviewItem key={index} reviewItem={item} deleteShowReview={deleteShowReview} index={index}></ReviewItem>;
      })}
    </Stack>
  );
};
