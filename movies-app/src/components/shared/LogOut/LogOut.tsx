"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const LogOut = () => {
    const router = useRouter();
    useEffect(() => {
      localStorage.removeItem("auth");
      router.push("/login");
    }, [router]);
  
    return null;
  };