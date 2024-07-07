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
import { IReviewListProps } from "../../../typings/ReviewList.type";

export const ShowReviewSection = ({
  reviewList,
  addShowReview,
}: IReviewListProps) => {
  return (
    <Flex>
      <Card width="600px">
        {/* <CardHeader>
                <Heading size='lg'>Review section</Heading>
            </CardHeader> */}
        <CardBody>
          <ReviewForm addShowReview={addShowReview} />
          <hr />
          <ReviewList reviewList={reviewList} />
        </CardBody>
      </Card>
    </Flex>
  );
};
