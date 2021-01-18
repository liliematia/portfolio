import Head from "next/head";
import styles from "../components/layout/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "LILIE MATIA";
export const siteTitle = "lilie.codes";
const intro = "Hello! 👋🏼";
const body = `
  I'm a software engineer, aspiring minimalist, and coffee enthusiast. In many ways, I am considered to be a walking paradox.
  I am a nerd by trade but certainly not a gamer, a social introvert, a technologist into digital minimalism, a lover of color theory who only wears neutrals, an improver but not a workaholic, and a city dweller who is keen on peace and quiet.
  May this space be one of sharing, learning, ranting, explaining, questioning, and understanding.
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
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <main>
        <h2 className={utilStyles.headingLg}>{intro}</h2>
        <p>{body}</p>
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
