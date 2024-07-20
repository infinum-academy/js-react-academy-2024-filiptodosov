
import { render } from "@testing-library/react";
import { ReviewList } from "./ReviewList";
import ReviewItem from "../ReviewItem/ReviewItem";

// Mocking ReviewItem
jest.mock("../ReviewItem/ReviewItem", () => {
    return jest.fn().mockReturnValue(null); // Mocking it to return a null component
});

const mockReviewList = {
    reviewItems: [
        { comment: "bla", id: "1", rating: 5 }
    ]
};

describe("ReviewList", () => {
    it("should render ReviewItem", () => {
        render(<ReviewList reviewList={mockReviewList} />);

        expect(ReviewItem).toHaveBeenCalledTimes(mockReviewList.reviewItems.length);
        mockReviewList.reviewItems.map(item => {
            console.log(item);
            expect(ReviewItem).toHaveBeenCalledWith({reviewItem: item}, {});
        })
    
    });
});
