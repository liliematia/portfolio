import Head from "next/head";
import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "LILIE MATIA";
export const siteTitle = "lilie.codes";
const intro = "Hello! 👋🏼";
const body = `
  It's nice to meet you ✨.

  I'm a software engineer 👩🏻‍💻, coffee enthusiast ☕, and probably "that person" that always asks to say "hi" to your dog. 🐶
  Here you can find me writing about the things I care most about, which include (but are certainly not limited to)
  societal relationships with technology, software engineering, minimalism, the things I'm reading about, and
  self-improvement.
`;

export default function About({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
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
      </header>
      <main>
        <h2 className={utilStyles.headingLg}>{intro}</h2>
        <h3>{body}</h3>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
