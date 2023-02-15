import React from 'react';
import {GetServerSideProps, NextPageContext} from "next";
import {URLPattern} from "next/server";


export function parsePath(pathname: string, ctx: NextPageContext): any {
    const pattern = new URLPattern({pathname});
    const result = pattern.exec(`http://host${ctx.req?.url}`);
    return result?.pathname.groups || {};
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    const {slug, type} = parsePath('/pages/:type/:slug', ctx)
    return {
        props: {
            slug: slug,
            type: type,
        }
    }
};

const Slug = ({slug, type}: { slug: number, type: string }) => {

    console.log(type,slug)
    return (
        <div>
            <div>현재 URL :{`/pages/${type}/${slug}`}</div>

        </div>
    );
};

export default Slug;
