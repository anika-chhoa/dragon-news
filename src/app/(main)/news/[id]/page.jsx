import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaArrowRight, FaBookmark, FaEye, FaStar } from 'react-icons/fa';

export async function generateMetadata({params}){
    const {id}=await params;
    const news=await getNewsDetailsById(id);
    return {
    title: news.title,
    description:news.details
  }

}

const NewsDetails = async({params}) => {
    const {id}=await params;
    const news=await getNewsDetailsById(id);
    
    return (
        <div className="card w-5xl mx-auto bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="authorInfo flex justify-between bg-slate-200 px-3 py-2 items-center rounded-md">
                  <div className="flex  gap-4">
                    <Image
                      src={news.author?.img}
                      alt={news.author?.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                    <h2 className="font-semibold">{news.author?.name}</h2>
                    <h2 className="text-xs">{news.author?.published_date}</h2>
                  </div>
                  
                  </div>
                  <div className="flex justify-between gap-2">
                    <CiShare2 className="text-xl" />
                    <FaBookmark className="text-xl"/>
                  </div>
                  
                </div>
                <h2 className="card-title">{news.title}</h2>
               <figure>
                <Image src={news.image_url} alt={news.title} width={400} height={400} className="w-full mb-3" />
              </figure>
              <p className="">{news.details}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <h2 className="font-semibold flex items-center gap-1.5"><FaStar className="text-lg text-yellow-500" /> {news.rating.number}</h2>
                    <h2 className="font-semibold flex items-center gap-1.5"><FaEye className="text-lg"/>{news.total_view}</h2>
                </div>
                <Link href={`/category/${news.category_id}`}>
                <button className="btn bg-pink-700 text-white font-bold">See other news of this category <FaArrowRight/></button>
                </Link>
              </div>
              </div>
              
            </div>
    );
};

export default NewsDetails;