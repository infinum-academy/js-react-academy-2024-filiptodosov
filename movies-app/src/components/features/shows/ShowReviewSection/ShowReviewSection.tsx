import { Flex, useToast, Card, CardBody } from "@chakra-ui/react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewList } from "../../../../typings/ReviewList.type";
import { IReviewItem } from "@/typings/ReviewItem.type";

export interface IShowReviewSectionProps {
  reviewList: IReviewList;
  addShowReview: (newReviewItem: IReviewItem) => void;
  deleteShowReview: (key: number) => void;
}

export const ShowReviewSection = ({ reviewList }: IShowReviewSectionProps) => {
  return (
    <Card width="600px" marginTop={10}>
      <CardBody>
        <ReviewForm />
        <hr />
        <ReviewList reviewList={reviewList} />
      </CardBody>
    </Card>
  );
};
