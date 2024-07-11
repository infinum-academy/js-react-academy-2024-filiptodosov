import { IReviewList } from "./ReviewList.type";


export interface IShow {
    title: string,
    id: string,
    description: string,
    image_url?: string,
    averageRating?: number,
    no_of_reviews?: number,
    reviewList: IReviewList,
}