// check if correct user email is rendered X
// check if delete button is rendered
// check if onDelete callback has beed called only once with the necessary data


import { render, screen } from "@testing-library/react";
import ReviewItem from "./ReviewItem";
import { IShow } from "@/typings/Show.type";
import { IReviewList } from "@/typings/ReviewList.type";
import { IReviewItem } from "@/typings/ReviewItem.type";


const mockReviewItem:IReviewItem = {
    rating: 5,
    reviewText: "bla bla hey hey"
}


describe("ReviewItem", ()=>{
    it("should render average rating", ()=>{

        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={()=>{}} />);

        const reviewRating = screen.getByTestId("review-rating");

        expect(reviewRating).toHaveTextContent(`${mockReviewItem.rating}/5`)
    })

    it("should render review text", ()=>{
        const mockOnDelete = jest.fn();

        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={mockOnDelete} />);

        const reviewText = screen.getByTestId("review-description");

        expect(reviewText).toHaveTextContent(mockReviewItem.reviewText);
    })

    it("should render delete button", ()=>{        
        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={()=>{}} />);

        const button = screen.getByTestId("delete-review-button");

        expect(button).toBeInTheDocument();
    })

    it("should call delete button once", ()=>{
        const mockIndex = 1;

        const mockOnDelete = jest.fn();

        render(<ReviewItem  reviewItem={mockReviewItem} index={mockIndex} deleteShowReview={mockOnDelete} />);

        const deleteButton = screen.getByTestId("delete-review-button");

        deleteButton.click();
        
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    })
})