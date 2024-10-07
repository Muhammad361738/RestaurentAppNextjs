import React from 'react';
import Image from 'next/image';
// import impo from "../Assests/impo.jpg"
import man1 from "../Assests/man1.jpg"
import manu1 from "../Assests/manu1.jpg"
import manu2 from "../Assests/manu2.jpg"
import manu3 from "../Assests/manu3.jpg"
import manu4 from "../Assests/manu4.jpg"
import manu6 from "../Assests/manu6.jpg"
import manu7 from "../Assests/manu7.jpg"
import manu8 from "../Assests/manu8.jpg"
import manu9 from "../Assests/manu9.jpg"

import manu10 from "../Assests/manu10.jpg"

// import manu8 from "../Assests/man8.jpg"

const Page = () => {
    return (
        <div className='bg-slate-800'>
             <h2 className='text-center font-bold text-2xl md:text-4xl text-amber-600 pt-24'>Check Our Testy Menu</h2>
            <div className='lg:flex  items-center text-center gap-3 pt-3 pl-5 flex-wrap pb-10'>
                {/* card1 */}
                <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu10} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Lobster Bisque ...........................$9.5</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
                      {/* card1 */}
                <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={man1} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Platter ...........................$60</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
                  {/* card1 */}
                  <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu2} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Tuscan Grilled ...........................$95</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
                     {/* card1 */}
                  <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu3} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Lobster Bisque ...........................$95</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>

                  {/* card1 */}
                  <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu4} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Spinach Salad ...........................$4.5</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>

                  {/* card1 */}
                  <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu6} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Mozzarella Stick ...........................$6</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>

                  {/* card1 */}
                  <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu7} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Lobster Roll ...........................$5.5</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>

                 {/* card1 */}
                 <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu8} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Bread Barrel ...........................$32</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>

                 {/* card1 */}
                 <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu9} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Greek Salad ...........................$95</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
                 {/* card1 */}
                 <div className='flex justify-center gap-1 pt-3 pl-5'>
                <Image className='rounded-full w-20 h-20 text-white' src={manu1} alt=''></Image>
                <div className='text-white'> <p className=' font-bold font-serif'>Crab Cake ...........................$9.95</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
               
                
               </div>

               </div>
        
    );
}

export default Page;
