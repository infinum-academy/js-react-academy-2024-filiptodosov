import { IShow } from "@/typings/Show.type";
import {
    Button,
    Heading,
    Image,
    Text,
    Card,
    CardBody,
    Stack,
    CardFooter,
  } from "@chakra-ui/react";
import Link from "next/link";
  
interface IShowCardProps {
    show: IShow
}

export default function ShowCard({show}: IShowCardProps) {

    return (<Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={show.image_url}
          alt='Show thumbnail'
          role="image-thumbnail"
        />
      
        <Stack>
          <CardBody>
            <Heading size='md' data-testid={`show-title-${show.id}`}>{show.title}</Heading>
      
            <Text py='2' data-testid={`show-description-${show.id}`}>
              {show.description}
            </Text>
            <Text py='2' data-testid={`show-average-rating-${show.id}`}  > 
              {show.averageRating ? show.averageRating/5 : "No rating available."}

            </Text>
          </CardBody>
      
          <CardFooter>
            <Button variant='solid' colorScheme='blue' as={Link} href={`/shows/${show.id}`}>
              See more details
            </Button>
          </CardFooter>
        </Stack>
      </Card>);
}

