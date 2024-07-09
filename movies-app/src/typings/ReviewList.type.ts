import { IReviewItem } from "./ReviewItem.type";

export interface IReviewList {
    reviewItems: Array<IReviewItem>
}
export interface IReviewListProps {
    reviewList?: IReviewList,
    addShowReview: () => void,
    removeShowReview: () => void
}