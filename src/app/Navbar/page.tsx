import React from 'react';
import Link from "next/link"

const Page = () => {
    return (
        <div>
       <nav className="bg-black bg-opacity-40 fixed w-full z-10 mx-auto h-16 mt-5 text-center text-white">

            <div className="flex justify-between items-center">
    
                 <div className=" font-bold text-2xl font-serif pt-4 pl-6">
                    <h2>RESTAURANTLY</h2>
               </div>
      
              <div className='hidden md:block pt-4 font-bold text-lg '>
                          <ul className='outline-none flex gap-5 pr-10'>
                                 <li><Link href={"/"}>Home</Link></li>
                                 <li><Link href={"/About"}>About</Link></li>
                                 <li><Link href={"/Menu"}>Menu</Link></li>
                                 <li><Link href={"/Contact"}>Contact us</Link></li>
                                <li><Link className='px-3 py-2 font-bold border-2 rounded-3xl border-yellow-500' href={"/Table"}>BOOK A TABLE</Link></li>
                          </ul>
                     </div>
                          <div className="block md:hidden  ">
                           <a className="text-4xl text-white p-3 " href="#">&#8801;</a>
                           </div>
          </div>

</nav>

        </div>
    );
}

export default Page;
