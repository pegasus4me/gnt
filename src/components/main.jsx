import React from 'react';
import Image from '../assets/mail_img.png'
import TextFrame from './TextFrame';
const main = () => {
    
    return (
        <div className=''>
            
            <div className='flex justify-center'>
                <img src={Image} alt="" className='w-44 lg:w-80'/> 
            </div>
            <div >
                <div>
                <TextFrame text="The First Protocol 
                Powered by GOLD"/>
                </div>
                
                <div className='flex justify-center flex-col items-center'>
                <button className='bg-yellow-300 font-display w-52 rounded mb-3 p-3'>Explore</button>
                <button className='bg-white font-display  w-52 rounded p-3'>game</button>
                </div>
            </div>
           
            
        </div>
    );
}

export default main;
