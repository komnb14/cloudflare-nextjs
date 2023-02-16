import Head from "next/head";
import Link from "next/link";
import {NextPageContext} from "next";

export const config = {
    runtime: "experimental-edge",
};


export const revalidate = 0

export const getServerSideProps = async ({res}:NextPageContext) => {
    const random = Math.floor(Math.random() * 99 + 1);
    const randomNumberGetType = Math.floor(Math.random() * 2 + 1);
    const randomType = ['type', 'test', 'hello'];
    // @ts-ignore
    res?.headers?.append('x-workers-hello', 'Hello from Cloudflare Workers');
    return {
        props: {
            runtime: process.env.NEXT_RUNTIME,
            uuid: await fetch("https://uuid.rocks/plain").then((response) =>
                response.text()
            ),
            slug: random,
            type: randomType[randomNumberGetType]
        },
    };
};

const Home = ({runtime, uuid, slug, type}: { runtime: string; uuid: string; slug: number; type: string }) => {

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
                <Link href={`/pages/${type}/${slug}`}>{`/pages/${type}/${slug}`}</Link>
            </main>
        </div>
    );
};

export default Home
