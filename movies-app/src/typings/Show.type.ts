import { IReviewItem } from "./ReviewItem.type";

export interface IShow {
    title: string;
    description: string;
    image_url?: string;
    averageRating?: number;
    reviewList: Array<IReviewItem>;
}