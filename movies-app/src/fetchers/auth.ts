import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";
import { IUser,IAuthData } from "@/typings/Auth.type";
import { swrKeys } from "./swrKeys";


interface IMyProfileResponse {
    user: IUser
}

export function getMyProfile(){
    const auth:string = localStorage.getItem("auth");
    const authHeaders = JSON.parse(auth);

    return  fetcher <IMyProfileResponse>(swrKeys.myProfile, {headers: authHeaders});
}
