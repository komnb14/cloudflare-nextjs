import React from 'react';
import {GetServerSideProps, NextPageContext} from "next";
import {URLPattern} from "next/server";


export function parsePath(pathname: string, ctx: NextPageContext): any {
    const pattern = new URLPattern({pathname});
    const result = pattern.exec(`http://host${ctx.req?.url}`);
    return result?.pathname.groups || {};
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    console.log(ctx.query);
    const {slug, type} = parsePath('/pages/:type/:slug', ctx)
    return {
        props: {
            slug: slug,
            type: type,
            ctx: ctx.query,
        }
    }
};

const Slug = ({slug, type,ctx}: { slug: number, type: string,ctx: NextPageContext }) => {

    console.log(type,slug)
    return (
        <div>
            <div>현재 URL :{`/pages/${type}/${slug}`}</div>
            {ctx && JSON.stringify(ctx)}
        </div>
    );
};

export default Slug;
