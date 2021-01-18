import CameraRoll from "../components/cameraRoll/cameraRoll";
import Date from "../components/date/date";
import { getCameraRollImages } from "../lib/cameraRoll";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import React, { useState } from "react";
import Typist from "react-typist";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCameraRollImages = getCameraRollImages();
  return {
    props: {
      allPostsData,
      allCameraRollImages,
    },
  };
}

export default function Home({ allPostsData, allCameraRollImages }) {
  // Sets the initial state of the homepage to show the Blog
  const [nav, setNav] = useState("blog");

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Typist>
            <span>software engineer</span>
            <Typist.Backspace count={17} delay={300} />
            <span>puppy mom</span>
            <Typist.Backspace count={9} delay={300} />
            <span>queen of the chemex</span>
            <Typist.Backspace count={19} delay={300} />
            <span>aspiring minimalist</span>
            <Typist.Backspace count={19} delay={300} />
            <span>improver</span>
            <Typist.Backspace count={8} delay={300} />
            <span>musician</span>
            <Typist.Backspace count={8} delay={300} />
            <span>human.</span>
          </Typist>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <section className={utilStyles.navbar}>
          <Link href={""}>
            <a className={utilStyles.bigLink} onClick={() => setNav("blog")}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
            </a>
          </Link>
          <Link href={""}>
            <a
              className={utilStyles.bigLink}
              onClick={() => setNav("camera-roll")}
            >
              <h2 className={utilStyles.headingLg}>Camera roll</h2>
            </a>
          </Link>
        </section>
        {nav === "blog" ? (
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <CameraRoll photos={allCameraRollImages} />
        )}
      </section>
    </Layout>
  );
}
