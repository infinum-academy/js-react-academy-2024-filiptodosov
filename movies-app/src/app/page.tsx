"use client";

import styles from "./page.module.css";
import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "./components/features/shows/ShowReviewSection/ShowReviewSection";

import { IReviewItem } from "../typings/ReviewItem.type";
import React, { useEffect, useState } from "react";

let mockReviewItems: Array<IReviewItem> = [
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
];


export default function Home() {
  
  const loadFromLocalStorage = (): Array <IReviewItem> => {
    let reviewItemsLocal: Array<IReviewItem> = JSON.parse(
      localStorage.getItem("reviewItems")
    );

    if (!reviewItemsLocal){
      return mockReviewItems;
    }

    return reviewItemsLocal;
  }

  const saveToLocalStorage = (newReviewItems: Array<IReviewItem>) => {
    localStorage.setItem(
      "reviewItems",
      JSON.stringify(newReviewItems)
    );
  }

  const calculateAverageRating = (reviewItems: Array<IReviewItem>) => {
    let sumOfReviews = 0;

    reviewItems.map((reviewItem: IReviewItem) => {
      sumOfReviews += reviewItem.rating;
    });

    return Math.round((sumOfReviews / reviewItems.length) * 10) / 10;
  };

  useEffect(()=>{

    let reviewItemsLocal = loadFromLocalStorage();
    setReviewItems(reviewItemsLocal);
  }, []);


  let [reviewItems, setReviewItems] = useState(Array <IReviewItem>);
  let [averageRating, setAverageRating] = useState(
    calculateAverageRating(reviewItems)
  );

  useEffect(()=>{
    setAverageRating(calculateAverageRating(reviewItems));
  }, [reviewItems]);


  const addShowReview = () => {
    const newReviewItem: IReviewItem = {
      reviewText: document.getElementById("reviewDescription").value,
      rating: parseInt(document.getElementById("reviewRating").value, 10),
    };

    const newReviewItems = [...reviewItems, newReviewItem];
    if (newReviewItem.rating && newReviewItem.reviewText) {
      saveToLocalStorage(newReviewItems);
      setReviewItems(newReviewItems);

      document.getElementById("reviewDescription").value = "";
      document.getElementById("reviewRating").value = "";

      alert("New review has been added.");
    } else {
      alert("Both fields are mandatory.");
    }
  };

  return (
    <main className={styles.main}>
      <ShowDetails
        show={{
          image_url:
            "https://i0.wp.com/commonslibrary.org/wp-content/uploads/brooklyn99-s6-lrg.jpg?fit=533%2C300&ssl=1",
          title: "Brooklyn Nine-Nine",
          description:
            "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
          reviewList: reviewItems,
          averageRating: averageRating,
        }}
      ></ShowDetails>
      <ShowReviewSection
        reviewList={reviewItems}
        addShowReview={addShowReview}
      ></ShowReviewSection>
    </main>
  );
}
