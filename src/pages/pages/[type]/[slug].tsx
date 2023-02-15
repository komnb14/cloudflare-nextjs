import React from 'react';
import {NextPageContext} from "next";
import {URLPattern} from "next/server";


function parsePath(pathname: string, ctx: NextPageContext): any {
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

const Slug = ({slug, type, ctx}: { slug: number, type: string, ctx: NextPageContext }) => {

    return (
        <div>
            <div>현재 URL :{`/pages/${type}/${slug}`}</div>
            {ctx && JSON.stringify(ctx)}
        </div>
    );
};

export default Slug;
