import { Flex, Heading, Card, CardHeader, CardBody, Stack, StackDivider, Box, Text, Image } from '@chakra-ui/react'
import { ReviewItem } from "../../review/ReviewItem/ReviewItem";

const mockReviewItems: Array<ReviewItem> = [
    {
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla diam, maximus eget vulputate id, tristique id odio. Aliquam vehicula dui sit amet euismod eleifend.",
        rating: 1
    },
    {
        reviewText: "Donec pulvinar, quam quis bibendum congue, mi justo sagittis eros, sed finibus augue augue vel enim. Aliquam sodales, tellus eget lobortis laoreet, nulla eros fermentum tellus, faucibus congue erat justo nec magna.",
        rating: 2
    },
    {
        reviewText: "Duis quis iaculis quam. Duis tempus ornare suscipit. Morbi id erat nec est placerat scelerisque suscipit ut justo.",
        rating: 3
    },
    {
        reviewText: "Donec vitae orci auctor, interdum libero sit amet, viverra augue. Pellentesque purus risus, malesuada eleifend malesuada eu, tempus nec ante.",
        rating: 4
    },
    {
        reviewText: "Sed vel nulla dignissim, facilisis lacus in, tincidunt augue. Vestibulum sagittis nibh nec erat egestas, vitae mattis velit euismod. Fusce a ligula id sem semper pulvinar.",
        rating: 5
    }
];

export const ShowReviewSection = () => {
    return (
        <Flex>
            <Card width="600px">
            <CardHeader>
                <Heading size='lg'>Review section</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    {mockReviewItems.map((item, index) => {
                        return <ReviewItem key={index} rating={item.rating} reviewText={item.reviewText}></ReviewItem>
                    })}
                </Stack>
            </CardBody>
            </Card>
        </Flex>
    )
}