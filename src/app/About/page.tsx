import React from 'react';
import Image from "next/image"
import about from "../Assests/about.jpg"
// import bgi from "../Assests/about.jpg"

const Page = () => {
    return (
        <div>
            <div className='bg-black  bg-opacity-80 h-screen w-screen text-white  '>
                <div className='flex flex-wrap  items-center justify-center md:justify-between'>
                     <div className=' mt-20  w-64 sm:72 m-5 md:w-80 '>
                        <h2 className='text-2xl font-bold text-slate-200'>We deliver Delicious & Healthy food</h2>
                        <p className='text-sm'>Welcome to Restaurently your go-to destination for nutritious and delicious meals! We believe that healthy eating should never compromise on flavor. Our menu is thoughtfully crafted using fresh, organic ingredients, offering a variety of wholesome options that nourish both body and soul</p>
                     </div>
                     <div className=''>
                        <Image className='h-auto w-96 rounded-lg items-center mt-20 lg:h-[500px]  lg:w-[500px] md:mt-15' src={about} alt=""></Image>
                     </div>
                </div>

            </div>
            
        </div>
    );
}

export default Page;
