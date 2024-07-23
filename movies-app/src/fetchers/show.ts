import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";
import { getAuthHeaders } from "./auth";
import { swrKeys } from "./swrKeys";
import { IReviewItem } from "@/typings/ReviewItem.type";

interface IShowsResponse {
    shows: Array<IShow>
}
interface IShowResponse {
    show: IShow
}

interface IReviewResponse{
    reviews: Array<IReviewItem>
}

export function getShows(){
    const authHeaders = getAuthHeaders();
    return  fetcher <IShowsResponse>(swrKeys.shows, {headers: authHeaders});
}

export function getTopShows(){
    const authHeaders = getAuthHeaders();
    return  fetcher <IShowsResponse>(swrKeys.topRatedShows, {headers: authHeaders});
}

export function getShow(id: string){
    const authHeaders = getAuthHeaders();
    return  fetcher <IShowResponse>(`${swrKeys.shows}/${id}`, {headers: authHeaders});
}

export function getShowReviews(id: string){
    const authHeaders = getAuthHeaders();
    return  fetcher <IReviewResponse>(`${swrKeys.shows}/${id}/reviews`, {headers: authHeaders});
}