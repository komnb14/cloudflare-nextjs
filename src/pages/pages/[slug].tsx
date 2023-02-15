import React from 'react';
import {GetServerSideProps, NextPageContext} from "next";
import {URLPattern} from "next/server";


type params = {
    slug: number
}

export const config = {
    runtime: "experimental-edge",
};

export function parsePath(pathname: string, ctx: NextPageContext): any {
    const pattern = new URLPattern({pathname});
    const result = pattern.exec(`http://host${ctx.req?.url}`);
    return result?.pathname.groups || {};
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    const {slug} = parsePath('/pages/:slug', ctx)
    return {
        props: {
            params: slug
        }
    }
};

const Slug = ({params}: { params: number }) => {

    return (
        <div>
            {params}
        </div>
    );
};

export default Slug;
