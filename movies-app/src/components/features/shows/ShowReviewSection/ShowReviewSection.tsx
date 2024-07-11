import {
    Flex,
    Card,
    CardBody,
  } from "@chakra-ui/react";
  import { ReviewList } from "../../review/ReviewList/ReviewList";
  import { ReviewForm } from "../ReviewForm/ReviewForm";
  import { IReviewList } from "../../../../typings/ReviewList.type";
  import { IReviewItem } from "@/typings/ReviewItem.type";
  

    export interface IShowReviewSectionProps {
      reviewList: IReviewList,
      addShowReview: (newReviewItem: IReviewItem) => void,
      deleteShowReview: (key: number) => void,
      successLabel: Boolean,
      errorLabel: Boolean
  }


  export const ShowReviewSection = ({
    reviewList,
    addShowReview,
    deleteShowReview,
    successLabel,
    errorLabel
  }: IShowReviewSectionProps) => {
    return (
      <Flex>
        <Card width="600px">
          <CardBody>
            <ReviewForm addShowReview={addShowReview} successLabel={successLabel} errorLabel={errorLabel}   />
            <hr />
            <ReviewList reviewList={reviewList} deleteShowReview={deleteShowReview}/>
          </CardBody>
        </Card>
      </Flex>
    );
  };
  