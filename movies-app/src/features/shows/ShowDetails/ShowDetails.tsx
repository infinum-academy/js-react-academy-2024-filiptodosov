import { Flex, Heading, Card, CardHeader, CardBody, Stack, StackDivider, Box, Text, Image } from '@chakra-ui/react'
import { IShow } from '../../../typings/show.type' 


export const ShowDetails = (props: IShow) => {
    return (
        <Flex marginBottom="10">
              <Card width="100%">
            <CardHeader>
                <Heading size='lg'>{props.title}</Heading>
                <Image
                src={props.image_url ? props.image_url : "https://fakeimg.pl/900x600?text=No+image,+yet!&font=bebas"}
                alt='TV Show thumbnail'
                width="100%"
                borderRadius='lg'
                />
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        {props.description}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Average Rating
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                        {props.averageRating ? props.averageRating : "No rating."}
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
        </Flex>
    )
}