import { Heading, Box, Text } from '@chakra-ui/react'
import { IReviewItem } from "../../../typings/ReviewItem.type";

export const ReviewItem = (props: IReviewItem) => {
    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
            {props.reviewText}
            </Heading>
            <Text pt='2' fontSize='sm'>
                {props.rating}/5
            </Text>
        </Box>
    )
}