import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = async () => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      uuid: await fetch("https://uuid.rocks/plain").then((response) =>
          response.text()
      ),
    },
  };
};

const Home: NextPage<{ runtime: string; uuid: string }> = ({
                                                             runtime,
                                                             uuid,
                                                           }) => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <a href="https://nextjs.org">Next.js, running at the {runtime}!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <p className={styles.description}>
            Here&apos;s a server-side UUID:
            <code className={styles.code}>{uuid}</code>
          </p>
        </main>
      </div>
  );
};
