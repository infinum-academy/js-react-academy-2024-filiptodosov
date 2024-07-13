import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { IReviewItem } from "../../../../typings/ReviewItem.type";

export interface IReviewItemProps {
  reviewItem: IReviewItem;
  index: number;
  deleteShowReview: (key: number) => void;
}

export const ReviewItem = ({
  reviewItem,
  deleteShowReview,
  index,
}: IReviewItemProps) => {
  const onClickHandler = () => {
    deleteShowReview(index);
  };

  return (
    <Box>
      <Heading size="xs">{reviewItem.reviewText}</Heading>
      <Text pt="2" fontSize="sm">
        {reviewItem.rating}/5
      </Text>
      <Button onClick={onClickHandler}>Delete</Button>
    </Box>
  );
};
