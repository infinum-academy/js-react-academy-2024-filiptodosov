'use client';

import styles from "./page.module.css";
import { ShowDetails } from "../features/shows/ShowDetails/ShowDetails";
import {ShowReviewSection} from "../features/shows/ShowReviewSection/ShowReviewSection"

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowDetails image_url="https://i0.wp.com/commonslibrary.org/wp-content/uploads/brooklyn99-s6-lrg.jpg?fit=533%2C300&ssl=1" title="Brooklyn Nine-Nine" description="Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct."></ShowDetails>
      <ShowReviewSection></ShowReviewSection>
    </main>
  );
}