"use client";

import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";

import { IReviewItem } from "../../../../typings/ReviewItem.type";

import React, { useEffect, useState } from "react";
import { IShow } from "@/typings/Show.type";
import { IReviewList } from "@/typings/ReviewList.type";
import { getShow, getShowReviews } from "@/fetchers/show";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { Alert, AlertIcon, Spinner, useToast } from "@chakra-ui/react";

interface IShowResponse {
  show: IShow
}

const mockReviewItems: IReviewList = {
  reviewItems: [
    {
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla diam, maximus eget vulputate id, tristique id odio. Aliquam vehicula dui sit amet euismod eleifend.",
      rating: 1,
    },
    {
    comment:
        "Donec pulvinar, quam quis bibendum congue, mi justo sagittis eros, sed finibus augue augue vel enim. Aliquam sodales, tellus eget lobortis laoreet, nulla eros fermentum tellus, faucibus congue erat justo nec magna.",
      rating: 2,
    },
    {
    comment:
        "Duis quis iaculis quam. Duis tempus ornare suscipit. Morbi id erat nec est placerat scelerisque suscipit ut justo.",
      rating: 3,
    },
    {
    comment:
        "Donec vitae orci auctor, interdum libero sit amet, viverra augue. Pellentesque purus risus, malesuada eleifend malesuada eu, tempus nec ante.",
      rating: 4,
    },
    {
    comment:
        "Sed vel nulla dignissim, facilisis lacus in, tincidunt augue. Vestibulum sagittis nibh nec erat egestas, vitae mattis velit euismod. Fusce a ligula id sem semper pulvinar.",
      rating: 5,
    },
  ],
};

export default function ShowContainer() {
  const toast = useToast();
  const params = useParams();
  const [reviewsList, setReviewsList] = useState(mockReviewItems);
  const { data, error, isLoading } = useSWR(`/api/shows/${params.id}`, ()=> getShow(params.id as string));

  const { data: reviewsData, error: reviewsError, isLoading: reviewsIsLoading } = useSWR(`/api/shows/${params.id}/reviews`, ()=> getShowReviews(params.id as string));

  console.log(reviewsData);

  const show = data?.show;

  useEffect(()=>{
    if(reviewsData){
      setReviewsList({reviewItems: reviewsData.reviews});
    }
  
  }, [reviewsData]);  

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
    <>
      <ShowDetails show={show}></ShowDetails>
      <ShowReviewSection
        reviewList={reviewsList}
        addShowReview={()=> {}}
        deleteShowReview={()=> {}}
      ></ShowReviewSection>
    </>
  );
}
