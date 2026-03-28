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
        <div className='flex flex-col gap-[15px]'>
            <div className='flex flex-col px-[40px] pt-[70px] pb-[45px] gap-[10px] border-[#4c4c4c] border-[0.5px] rounded-[20px] bg-[#2A2A2A]'>
                <DynamicComponent/>
            </div>

            <div className='flex justify-between w-full h-[80px]'>
                <div className='w-[250px] h-full bg-[#2A2A2A] border-[0.5px] border-[#4C4C4C] rounded-[20px] cursor-pointer'>

                </div>
                <div className='w-[250px] h-full bg-[#2A2A2A] border-[0.5px] border-[#4C4C4C] rounded-[20px] cursor-pointer'>

                </div>
            </div>
        </div>
    )
}