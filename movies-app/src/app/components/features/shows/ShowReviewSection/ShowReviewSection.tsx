import {
    Flex,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { ReviewList } from "../../review/ReviewList/ReviewList";
  import { ReviewForm } from "../ReviewForm/ReviewForm";
  import { IReviewListProps } from "../../../../../typings/ReviewList.type";
  
  export const ShowReviewSection = ({
    reviewList,
    addShowReview,
    deleteShowReview
  }: IReviewListProps) => {
    return (
      <Flex>
        <Card width="600px">
          <CardBody>
            <ReviewForm addShowReview={addShowReview}  />
            <hr />
            <ReviewList reviewList={reviewList} deleteShowReview={deleteShowReview}/>
          </CardBody>
        </Card>
      </Flex>
    );
  };
  