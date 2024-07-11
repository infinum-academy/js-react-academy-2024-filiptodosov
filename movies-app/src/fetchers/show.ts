import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowsResponse {
    shows: Array<IShow>
}

export function getShows(){
    return  fetcher <IShowsResponse>("/api/shows");
}


export function getShow(id: string){
    return  fetcher <IShow>(`/api/shows/${id}`);
}