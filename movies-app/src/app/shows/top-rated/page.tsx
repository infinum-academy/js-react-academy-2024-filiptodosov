"use client";

import styles from "../../page.module.css";
import { Heading } from "@chakra-ui/react";
import ShowList from "@/components/features/shows/ShowList/ShowList";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Shows() {

  return (
      <>
        <AuthRedirect to="/login" condition="loggedOut"/>
        <Heading size="lg" >TV Shows</Heading >
        <ShowList topRated={true}/>
      </>
  );
}
