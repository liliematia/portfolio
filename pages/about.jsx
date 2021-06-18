import Head from "next/head";
import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "LILIE MATIA";
export const siteTitle = "lilie.codes";
const intro = "Hello! 👋🏼";
const body = `
  Nice to meet you. I'm a software engineer based in Portland, OR. Others define me as a dependable,
  fun, and detail oriented engineer with a "can-do" attitude. They might also say that I take too
  many pictures of my dog, but I say there's no such thing.
`;

export default function About({ children, home }) {
  return (
    <div>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <img
            src="/images/profile-pic.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1
            className={`${utilStyles.heading2Xl} ${utilStyles.mobileHeading2Xl}`}
          >
            {name}
          </h1>
        </>
      </header> */}
        {/* <h2 className={utilStyles.headingLg}>{intro}</h2> */}
      <p>{body}</p>
      <a href="/lilie-matia-resume.pdf" download="lilie-matia-resume">
        <h4>Download my resume here.</h4>
      </a>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
