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

const Slug = ({slug, type}: { slug: number, type: string,}) => {

    return (
        <div>
            <p>현재 URL :{`/pages/${type}/${slug}`}</p>
            <p>현재 Type : {type}</p>
            <p>현재 slug : {slug}</p>
        </div>
    );
};

export default Slug;
