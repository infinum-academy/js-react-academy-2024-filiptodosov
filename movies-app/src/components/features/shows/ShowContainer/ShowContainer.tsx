"use client";

import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";

import { IReviewItem } from "../../../../typings/ReviewItem.type";

import React, { useEffect, useState } from "react";
import { IShow } from "@/typings/Show.type";
import { IReviewList } from "@/typings/ReviewList.type";
import { getShow } from "@/fetchers/show";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";

const mockReviewItems: IReviewList = {
  reviewItems: [
    {
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla diam, maximus eget vulputate id, tristique id odio. Aliquam vehicula dui sit amet euismod eleifend.",
      rating: 1,
    },
    {
      reviewText:
        "Donec pulvinar, quam quis bibendum congue, mi justo sagittis eros, sed finibus augue augue vel enim. Aliquam sodales, tellus eget lobortis laoreet, nulla eros fermentum tellus, faucibus congue erat justo nec magna.",
      rating: 2,
    },
    {
      reviewText:
        "Duis quis iaculis quam. Duis tempus ornare suscipit. Morbi id erat nec est placerat scelerisque suscipit ut justo.",
      rating: 3,
    },
    {
      reviewText:
        "Donec vitae orci auctor, interdum libero sit amet, viverra augue. Pellentesque purus risus, malesuada eleifend malesuada eu, tempus nec ante.",
      rating: 4,
    },
    {
      reviewText:
        "Sed vel nulla dignissim, facilisis lacus in, tincidunt augue. Vestibulum sagittis nibh nec erat egestas, vitae mattis velit euismod. Fusce a ligula id sem semper pulvinar.",
      rating: 5,
    },
  ],
};

export default function ShowContainer() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(`/api/shows/${params.id}`, () =>
    getShow(params.id as string)
  );
  const show: IShow = data;
  let [reviewItems, setReviewItems] = useState(mockReviewItems);
  let [successLabel, setSuccessLabel] = useState(false);
  let [errorLabel, seterrorLabel] = useState(false);
  const loadFromLocalStorage = (): IReviewList => {
    let reviewItemsLocal: Array<IReviewItem> = JSON.parse(
      localStorage.getItem("reviewItems") as string
    );
    const newReviewList: IReviewList = { reviewItems: reviewItemsLocal };
    if (!reviewItemsLocal) {
      return mockReviewItems;
    }
    return newReviewList;
  };
  const saveToLocalStorage = (newReviewItems: IReviewList) => {
    localStorage.setItem(
      "reviewItems",
      JSON.stringify(newReviewItems.reviewItems)
    );
  };
  const calculateAverageRating = (reviewItems: IReviewList) => {
    let sumOfReviews = 0;
    reviewItems.reviewItems.map((reviewItem: IReviewItem) => {
      sumOfReviews += reviewItem.rating;
    });
    return (
      Math.round((sumOfReviews / reviewItems.reviewItems.length) * 10) / 10
    );
  };
  useEffect(() => {
    let reviewItemsLocal = loadFromLocalStorage();
    setReviewItems(reviewItemsLocal);
  }, []);
  const addShowReview = (newReviewItem: IReviewItem) => {
    const newReviewItems = [...reviewItems.reviewItems, newReviewItem];
    if (newReviewItem.rating && newReviewItem.reviewText) {
      const newReviewList: IReviewList = {
        reviewItems: newReviewItems,
      };
      saveToLocalStorage(newReviewList);
      setReviewItems(newReviewList);
      setSuccessLabel(true);
      seterrorLabel(false);
    } else {
      seterrorLabel(true);
      setSuccessLabel(false);
    }
  };
  const deleteShowReview = (key: number) => {
    let currentItems = [...reviewItems.reviewItems];
    currentItems.splice(key, 1);
    const newReviewList: IReviewList = {
      reviewItems: currentItems,
    };
    saveToLocalStorage(newReviewList);
    setReviewItems(newReviewList);
  };
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
        reviewList={reviewItems}
        addShowReview={addShowReview}
        deleteShowReview={deleteShowReview}
        successLabel={successLabel}
        errorLabel={errorLabel}
      ></ShowReviewSection>
    </>
  );
}
