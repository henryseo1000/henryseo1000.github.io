import { getFileNum } from '@/api/search/route';
import dynamic from 'next/dynamic';
import './globals.css';

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

    const DynamicComponent = dynamic(() => import(`../(markdowns)/${pageNum}.md`).then((comp) => {
        return comp
    }));

    return (
        <div className='flex flex-col px-[40px] pt-[70px] pb-[45px] gap-[10px] border-[#4c4c4c] border-[1px] rounded-[20px] bg-[#2A2A2A]'>
            <DynamicComponent/>
        </div>
    )
}