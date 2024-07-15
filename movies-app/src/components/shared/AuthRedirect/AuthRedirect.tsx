"use client";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { getMyProfile } from "@/fetchers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const AuthRedirect = () => {
    const { data, isLoading, error } = useSWR(swrKeys.myProfile, getMyProfile);
    const router = useRouter();
    const toast = useToast();

    useEffect(()=> {
        if (!isLoading && !data) {
            toast({
                title: 'Oops!',
                description: "You are not logged in. You will be redirected to the login page.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            router.push("/login");
        }

    }, [data, router, isLoading, toast])
}