// // check if correct user email is rendered X
// // check if delete button is rendered
// // check if onDelete callback has beed called only once with the necessary data


// import { render, screen } from "@testing-library/react";
// import ReviewItem from "./ReviewItem";
// import { IShow } from "@/typings/Show.type";
// import { IReviewList } from "@/typings/ReviewList.type";
// import { IReviewItem } from "@/typings/ReviewItem.type";



// describe("ReviewItem", ()=>{
//     it("should render average rating", ()=>{

//         render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={()=>{}} />);

//         const reviewRating = screen.getByTestId("review-rating");

//         expect(reviewRating).toHaveTextContent(`${mockReviewItem.rating}/5`)
//     })

// })