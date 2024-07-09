import { Heading, Box, Text } from '@chakra-ui/react'
import { IReviewItem } from "../../../../../typings/ReviewItem.type";

export interface IReviewItemProps {
    reviewItem: IReviewItem
}

export const ReviewItem = ({reviewItem}: IReviewItemProps) => {
    return (
        <Box>
            <Heading size='xs'>
            {reviewItem.reviewText}
            </Heading>
            <Text pt='2' fontSize='sm'>
                {reviewItem.rating}/5
            </Text>
        </Box>
    )
}