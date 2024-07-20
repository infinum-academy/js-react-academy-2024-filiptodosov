import {reviewsDeleteMutator} from "@/fetchers/mutators";
import {mutate} from "swr";
import ReviewItem from "./ReviewItem";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("@/fetchers/mutators", () => ({
    reviewsDeleteMutator: jest.fn().mockResolvedValue(null)
  }));
  
  jest.mock("swr", () => ({
    mutate: jest.fn()
  }));
  

const mockReviewItem = { comment: "bla", id: "1", rating: 5 };

describe("ReviewItem",  ()=>{
    it("should refresh the list", async ()=>{
        render(<ReviewItem reviewItem={mockReviewItem}></ReviewItem>);
        const deleteButton =  await screen.getByTestId("delete-review-button");
        deleteButton.click();

        await waitFor(()=>{
            expect(reviewsDeleteMutator).toHaveBeenCalled();
            expect(mutate).toHaveBeenCalled();
        })
    })
});