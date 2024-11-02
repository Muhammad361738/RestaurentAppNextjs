import React from 'react';
import Image from 'next/image'
import home from "../Assests/home.jpg"
import Link from 'next/link';

const Page = () => {
    return (
        <div>
             <div className="relative w-auto h-auto md:w-screen md:h-screen "> 
                    <Image
                        src={home}
                        alt="About Image"
                        // layout="fill"
                        // objectFit="cover" 
                        className="rounded-lg w-screen h-screen   md:block"
                    />
    
                </div>
                  <div className="absolute inset-0 mt-32  text-center ">
                    <p className="text-slate-900 rounded-2xl text-2xl font-bold  items-center justify-center md:justify-center mt-20 sm:text-4xl md:text-5xl   ">
                      <span className="bg-black text-white rounded-lg bg-opacity-40">Welcome to </span>
                         <span className=" text-cyan-500 bg-black rounded-lg bg-opacity-40">RESTAURANTLY</span> <br />
                        <span className="text-sm sm:text-lg md:text-2xl text-white bg-black rounded-lg bg-opacity-70">Delivering great food more then 18 years</span> 
                    </p>
                    <div className="mt-10 flex gap-4 justify-center flex-wrap text-white " >
                     <Link className=' bg-slate-900 opacity-80 px-8 py-3 border-4 rounded-3xl border-yellow-400 text-lg font-bold mt-2'  href={"/OnlineFood"}>Online Order</Link>
                    <Link className='bg-slate-900 opacity-80 px-8 py-3 border-4 rounded-3xl border-yellow-400 text-lg font-bold mt-2 ' href={"/Table"}>Book a Table</Link>
     
                    </div>
                    </div>

        </div>
    );
}

export default Page;
