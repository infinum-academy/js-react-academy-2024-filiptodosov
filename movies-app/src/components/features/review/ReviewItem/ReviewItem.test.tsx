// check if correct user email is rendered X
// check if delete button is rendered
// check if onDelete callback has beed called only once with the necessary data


import { render, screen } from "@testing-library/react";
import ReviewItem from "./ReviewItem";
import { IShow } from "@/typings/Show.type";
import { IReviewList } from "@/typings/ReviewList.type";
import { IReviewItem } from "@/typings/ReviewItem.type";


describe("ReviewItem", ()=>{
    // it("should render image", ()=>{

    //     const mockReviewList: IReviewList = {
    //         reviewItems: []
    //     };

    //     const mockShow:IShow = {
    //         "id": "128",
	// 		"averageRating": 2,
	// 		"description": "An average high school student and his best friend get caught up in some trouble causing him to receive a werewolf bite. As a result they find themselves in the middle of all sorts of dramas in Beacon Hills.",
	// 		"image_url": "https://picsum.photos/400/600?random=20",
	// 		"no_of_reviews": 16,
	// 		"title": "Teen Wolf",
    //         reviewList: mockReviewList
    //     };

    //     render(<ShowCard show={mockShow}/>);
    //     const image = screen.getByRole("image-thumbnail");

    //     expect(image).toHaveAttribute("src", mockShow.image_url);
    // })

    // it("should render title", ()=>{

    //     const mockReviewList: IReviewList = {
    //         reviewItems: []
    //     };

    //     const mockShow:IShow = {
    //         "id": "128",
	// 		"averageRating": 2,
	// 		"description": "An average high school student and his best friend get caught up in some trouble causing him to receive a werewolf bite. As a result they find themselves in the middle of all sorts of dramas in Beacon Hills.",
	// 		"image_url": "https://picsum.photos/400/600?random=20",
	// 		"no_of_reviews": 16,
	// 		"title": "Teen Wolf",
    //         reviewList: mockReviewList
    //     };

    //     render(<ShowCard show={mockShow}/>);
    //     const title = screen.getByRole("show-title");

    //     expect(title).toBeInTheDocument();
    // })

    it("should render average rating", ()=>{

        const mockReviewItem:IReviewItem = {
            rating: 5,
            reviewText: "bla bla hey hey"
        }
        
        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={()=>{}} />);

        const reviewRating = screen.getByRole("review-rating");

        expect(reviewRating).toHaveTextContent(`${mockReviewItem.rating}/5`)
    })

    it("should render review text", ()=>{

        const mockReviewItem:IReviewItem = {
            rating: 5,
            reviewText: "bla bla hey hey"
        }
        
        const mockOnDelete = jest.fn();

        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={mockOnDelete} />);

        const reviewText = screen.getByRole("review-description");

        expect(reviewText).toHaveTextContent(mockReviewItem.reviewText);
    })

    it("should render delete button", ()=>{

        const mockReviewItem:IReviewItem = {
            rating: 5,
            reviewText: "bla bla hey hey"
        }
        
        render(<ReviewItem  reviewItem={mockReviewItem} index={1} deleteShowReview={()=>{}} />);

        const button = screen.getByRole("delete-review-button");

        expect(button).toBeInTheDocument();
    })

    it("should call delete button once", ()=>{

        const mockReviewItem:IReviewItem = {
            rating: 5,
            reviewText: "bla bla hey hey"
        }
        const mockIndex = 1;

        const mockOnDelete = jest.fn();

        render(<ReviewItem  reviewItem={mockReviewItem} index={mockIndex} deleteShowReview={mockOnDelete} />);

        const deleteButton = screen.getByRole("delete-review-button");

        deleteButton.click();
        
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    })
})