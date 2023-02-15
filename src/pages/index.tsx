import type {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

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
    const random = Math.floor(Math.random() * 99 + 1);
    const randomNumberGetType = Math.floor(Math.random() * 2 + 1);
    const randomType = ['type', 'test', 'hello'];

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div>랜덤 UUID : {uuid}</div>
                <div>현재 runtime : {runtime}</div>
                <Link href={`/pages/${randomType[randomNumberGetType]}/${random}`}>{`/pages/${randomType[randomNumberGetType]}/${random}`}</Link>
            </main>
        </div>
    );
};

export default Home
