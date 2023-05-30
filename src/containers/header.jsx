import React from 'react';
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { useState } from 'react';
const Header = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <div className='flex justify-between p-4 font-display text-4xl  lg:p-6'>
                <h3 className='text-yellow-200 '>GNT</h3>

                <button
                onClick={() => setToggle(!toggle)}
                className="lg:hidden"
                >
                {toggle === false ? <MdMenu className='text-white text-2xl' /> : <MdClose className='text-white text-2xl'/> }
                </button>
                    
                {toggle && <div className='border border-gray-400  flex flex-col bg-black p-3 rounded-md lg:hidden fixed'>
    
                    <a href="#project" className='text-lg text-yellow-200 hover:text-yellow-50'>PROJECT</a>
                    <a href="#token" className='text-lg text-yellow-200 hover:text-yellow-50'>TOKEN</a>
                    <a href="#roadmap" className='text-lg text-yellow-200 hover:text-yellow-50'>ROADMAP</a>
                    <a href="#" className='text-lg text-yellow-200 hover:text-yellow-50'>GAME</a>
                    <a href="#partners" className='text-lg text-yellow-200 hover:text-yellow-50'>PARTNERS</a>
                

                </div>}
                <li className='hidden lg:flex text-yellow-200 gap-4 text-xl'>
                    <a href="#project" className=' hover:text-gray-200'>PROJECT</a>
                    <a href="#token" className=' hover:text-gray-200'>TOKEN</a>
                    <a href="#roadmap" className=' hover:text-gray-200'>ROADMAP</a>
                    <a href="#" className=' hover:text-gray-200'>GAME</a>
                    <a href="#partners" className=' hover:text-gray-200 '>PARTNERS</a>
                </li>
            </div>
        </div>
    );
}

export default Header;
