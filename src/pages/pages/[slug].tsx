import React from 'react';
import {GetServerSideProps} from "next";


type params = {
    slug: number
}

export const config = {
    runtime: "experimental-edge",
};

export const getServerSideProps:GetServerSideProps = async ({params}) => {
    if(!params?.slug) {
        return {
            props: {
                params: 0,
            },
        };
    }
        return {
            props: {
                params: params.slug,
            },
        };

};

const Slug = ({params}:{params: number}) => {

    return (
        <div>
            {params}
        </div>
    );
};

export default Slug;
