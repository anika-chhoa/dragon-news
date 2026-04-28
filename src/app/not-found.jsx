import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] text-center flex flex-col justify-center items-center gap-8'>
            <p className="text-5xl text-center font-bold text-purple-500">This page is not found</p>
            <Link href="/">
            <button className='btn bg-purple-500 text-white font-bold'>Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;