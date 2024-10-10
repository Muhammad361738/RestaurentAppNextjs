import React from 'react';
import Image from 'next/image';
import f1 from "../Assests/f1.jpg"
import f2 from "../Assests/f2.jpg"
import f6 from "../Assests/f6.jpg"
import f4 from "../Assests/f4.jpg"

const Page = () => {
    return (
        <div className='bg-black opacity-90'>
            <div className='main dev p-10 '>
                <h3 className='text-white text-xl font-serif '>RESTAURENLLY</h3>
                <div className='text-white pt-5'>
                <p>A 108 ADAM Street  </p>
                <p>NY 535008 , USA</p>
                </div>

                <div className='text-white pt-5'>
                    <p>Phone : +123456789</p>
                    <p>Email : abcexample@gmail.com</p>
                </div>

                <div className='flex gap-3 mt-2'>
                    <div>
                        <Image className='h-10 w-10 rounded-full' src={f1} alt = ""></Image>
                    </div>
                    <div>
                        <Image className='h-10 w-10 rounded-full  bg-white' src={f2} alt = ""></Image>
                    </div>
                    <div className=''>
                        <Image className='h-10 w-10 rounded-full bg-white ' src={f6} alt = ""></Image>
                    </div>
                    <div>
                        <Image className='h-10 w-10 rounded-full  bg-white' src={f4} alt = ""></Image>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Page;
