import { render, screen } from "@testing-library/react";
import ShowCard from "./ShowCard";
import { IShow } from "@/typings/Show.type";
import { IReviewList } from "@/typings/ReviewList.type";

const mockReviewList: IReviewList = {
    reviewItems: []
};

const mockShow:IShow = {
    "id": "128",
    "averageRating": 2,
    "description": "An average high school student and his best friend get caught up in some trouble causing him to receive a werewolf bite. As a result they find themselves in the middle of all sorts of dramas in Beacon Hills.",
    "image_url": "https://picsum.photos/400/600?random=20",
    "no_of_reviews": 16,
    "title": "Teen Wolf",
    reviewList: mockReviewList
};

describe("ShowCard", ()=>{
    it("should render image", ()=>{
        render(<ShowCard show={mockShow}/>);
        const image = screen.getByTestId("image-thumbnail");

        expect(image).toHaveAttribute("src", mockShow.image_url);
    })

    it("should render title", ()=>{

        render(<ShowCard show={mockShow}/>);
        const title = screen.getByTestId("show-title");

        expect(title).toBeInTheDocument();
    })

    it("should render average rating", ()=>{

        render(<ShowCard show={mockShow}/>);
        const avgRating = screen.getByTestId("show-average-rating");

        expect(avgRating).toHaveTextContent(`${mockShow.averageRating}/5`)
    })
})