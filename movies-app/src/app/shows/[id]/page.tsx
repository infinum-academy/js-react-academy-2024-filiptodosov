"use client";

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import ShowContainer from "../../../components/features/shows/ShowContainer/ShowContainer";
import styles from "../../page.module.css";
import { useRouter } from "next/navigation";



export default function Show() {
  const router = useRouter();
  return (
    <>
      <AuthRedirect to="/login" condition="loggedOut"/>
      <ShowContainer />
    </>
  );
}
