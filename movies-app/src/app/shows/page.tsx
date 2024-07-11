"use client";

import styles from "../page.module.css";
import { Heading } from "@chakra-ui/react";
import ShowList from "@/components/features/shows/ShowList/ShowList";

export default function Shows() {

  return (
    <main className={styles.main}>
      <Heading size="lg" >TV Shows</Heading >
      <ShowList topRated={false}/>
      </main>
  );
}
