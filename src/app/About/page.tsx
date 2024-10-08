import React from 'react';
import Image from "next/image"
import about from "../Assests/about.jpg"
import ttt from "../Assests/ttt.jpg"

const Page = () => {
    return (
        <div className='bg-black  bg-opacity-80 h-screen w-screen pb-10'>
            
                <div className='flex flex-wrap  items-center justify-center md:justify-between  h-screen w-screen pb-10 '>
                     <div className=' mt-5  w-64 h-auto  lg:w-96 m-5 md:w-64 lg:m-10  md:m-10 pb-10'>
                        <h2 className='text-2xl  font-bold text-white pt-16'>We deliver Delicious & Healthy food</h2>
                        <p className='text-sm text-white md:font-bold'>Welcome to Restaurently your go-to destination for nutritious and delicious meals! We believe that healthy eating should never compromise on flavor. Our menu is thoughtfully crafted using fresh, organic ingredients, offering a variety of wholesome options that nourish both body and soul</p>
                        <p className='text-sm text-white md:font-bold'>Welcome to Restaurently where flavor meets tradition! We are dedicated to serving delicious, high-quality meals crafted from the freshest ingredients. Our menu is a celebration of diverse cuisines, blending rich flavors and modern twists.</p>
                        <p className='text-sm text-white md:font-bold'>Our culinary team takes pride in crafting dishes that not only satisfy but also tell a story of flavor and creativity. Whether its a casual meal with friends or a special occasion, we aim to make every visit memorable. Experience dining that delights all your senses</p>
                        <p className='text-sm text-white md:font-bold'>Located in the heart of City/Area Name Restaurantly offers the perfect spot for both locals and visitors. Easily accessible and surrounded by the vibrant energy of the city our restaurant provides a cozy escape amidst the hustle and bustle</p>
                     </div>
                     <div className=''>
                        <Image className='h-auto w-96 rounded-lg items-center mt-5  sm:mt-16 2xl:w-[700px] lg:mt-32 md:m-5   ' src={about} alt=""></Image>
                        <Image className='h-auto w-96 rounded-lg items-center mt-5  sm:mt-16 2xl:w-[700px] lg:m-5 md:m-5  ' src={ttt} alt=""></Image>
                     </div>
                </div>

            
            
        </div>
    );
}

export default Page;
