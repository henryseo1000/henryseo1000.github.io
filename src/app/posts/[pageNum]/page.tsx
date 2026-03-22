import { getFileNum } from '@/api/search/route';
import dynamic from 'next/dynamic';
import './globals.css';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export async function generateStaticParams() {
    const totalNum = getFileNum()

    console.log(totalNum)
    const totalArr = [];
    for (let i = 0; i < totalNum; i++) {
        totalArr.push({pageNum : `${i + 1}`});
    }

    return totalArr;
}

export default async function PageNum({params} : {params : Promise<{pageNum: string}>}) {
    const { pageNum } = await params;

    const DynamicComponent = dynamic(() => import(`../../(markdowns)/${pageNum}.mdx`).then((comp) => {
        return comp
    }));

    return (
        <>
            <DynamicComponent/>
        </>
    )
}