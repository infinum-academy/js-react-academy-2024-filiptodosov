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
import { IShow } from "../../../../typings/Show.type";

export interface IShowProps {
  show: IShow;
}

export const ShowDetails = ({ show }: IShowProps) => {
  return (
    <Flex marginBottom="10">
      <Card width="100%">
        <CardHeader>
          <Heading size="lg">{show.title}</Heading>
          <Image
            src={
              show.image_url
                ? show.image_url
                : "https://fakeimg.pl/900x600?text=No+image,+yet!&font=bebas"
            }
            alt="TV Show thumbnail"
            width="100%"
            borderRadius="lg"
          />
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {show.description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Average Rating
              </Heading>
              <Text pt="2" fontSize="sm">
                {show.averageRating ? `${show.averageRating}/5` : "No rating."}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};
