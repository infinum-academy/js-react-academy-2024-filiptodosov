import { Heading, Box, Text } from '@chakra-ui/react'
import { IReviewItemProps, IReviewItem } from "../../../../../typings/ReviewItem.type";

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