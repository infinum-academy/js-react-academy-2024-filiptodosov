"use client";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { getMyProfile } from "@/fetchers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthRedirect = () => {
    const { data } = useSWR(swrKeys.myProfile, getMyProfile);
    const router = useRouter();

    useEffect(()=> {
        console.log(data);
        if(!data){
            console.log("redirecting...");
            router.push("/login");
        }
    })
}