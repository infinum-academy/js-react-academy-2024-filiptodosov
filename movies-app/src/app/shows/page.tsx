"use client";

import ShowCard from "@/components/features/shows/ShowCard/ShowCard";
import styles from "../page.module.css";
import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getShows } from "@/fetchers/show";
import { IShow } from "@/typings/Show.type";
import useSWR from "swr";
import ShowList from "@/components/features/shows/ShowList/ShowList";

export default function Shows() {

  return (
    <main className={styles.main}>
      <Heading size="lg" >TV Shows</Heading >
      <ShowList/>
      </main>
  );
}
