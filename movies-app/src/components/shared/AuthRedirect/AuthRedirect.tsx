"use client";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { getMyProfile } from "@/fetchers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

interface IAuthRedirectProps {
  to: string;
  condition: "loggedIn" | "loggedOut";
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  const router = useRouter();
  const { data, isLoading } = useSWR(swrKeys.myProfile, getMyProfile);

  useEffect(() => {
    console.log("auth redirect:", data);
    if (isLoading) {
      return;
    }
    if (!data && condition === "loggedOut") {
      router.push(to);
    }

    if (data && condition === "loggedIn") {
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;
};
