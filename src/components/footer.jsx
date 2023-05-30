import React from 'react';
import spacex from "../assets/spacex.png"
import microsoft from "../assets/microsoft.png"
import gouv from "../assets/gouv.png"
import binance from "../assets/binance.png"


const Footer = () => {
    return (
        <div className='bg-black border-t-slate-100'>
            <h2 className='text-white font-bold text-6xl font-display text-center p-2'>IN GNT WE TRUST</h2>
        
            <div className='flex justify-between items-center p-4 flex-wrap sm:justify-center'>
                <img src={spacex} alt="spacex" />
                <img src={microsoft} alt="spacex" />
                <img src={gouv} alt="spacex" />
                <img src={binance} alt="spacex" />
            </div>
        </div>
    );
}

export default Footer;
