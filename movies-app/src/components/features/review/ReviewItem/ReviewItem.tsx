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
    <Box>
      <Heading size="xs" role="review-description">{reviewItem.reviewText}</Heading>
      <Text pt="2" fontSize="sm" role="review-rating">
        {reviewItem.rating}/5
      </Text>
      <Button role="delete-review-button" onClick={onClickHandler}>Delete</Button>
    </Box>
  );
};
