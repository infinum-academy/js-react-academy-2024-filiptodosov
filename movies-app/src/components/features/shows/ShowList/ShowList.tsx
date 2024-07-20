"use client";
import { Alert, AlertIcon, Flex, Heading, Spinner } from "@chakra-ui/react";
import { getShows, getTopShows } from "@/fetchers/show";
import useSWR from "swr";
import ShowCard from "../ShowCard/ShowCard";

interface IShowList {
  topRated: boolean;
}

export default function ShowList({ topRated }: IShowList) {
  const { data, error, isLoading } = useSWR(
    "/api/shows",
    topRated ? getTopShows : getShows
  );
  const shows = data?.shows || [];
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }
  if (isLoading) {
    return <Spinner size="xl" />;
  }
  return (
    <Flex flexDirection="column" gap={3}>
      {shows.map((show) => {
        return <ShowCard key={show.id} show={show} />;
      })}
    </Flex>
  );
}
