import { IReviewItem } from "./ReviewItem.type";
import { IReviewList } from "./ReviewList.type";


export interface IShow {
    title: string;
    description: string;
    image_url?: string;
    averageRating?: number;
    reviewList: IReviewList;
}