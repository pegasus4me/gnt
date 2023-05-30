import React from 'react';
import Marquee from 'react-fast-marquee';
import image1 from "../assets/image4.png"
import image2 from "../assets/image5.png"
import image3 from "../assets/image6.png"
import image4 from "../assets/image7.png"
import image5 from "../assets/image12.png"
const Partners = () => {
    return (
        <section className='mt-10 mb-10' id='partners'>
            <h3 className='text-yellow-200 font-bold text-3xl font-display text-center  '>PARTNERS</h3>
            <h5 className='text-white font-display text-xl text-center mb-4'>" la creme de la creme "</h5>
        <Marquee>
            <div>
                <img src={image1} alt="cz" className='mr-12'/>
            </div>
            <div>
                <img src={image2} alt="musk" className='mr-12'/>
            </div>
            <div>
                <img src={image3} alt="macron" className='mr-12'/>
            </div>
            <div>
                <img src={image4} alt="rotchild" className='mr-12'/>
            </div>
            <div>
                <img src={image5} alt="sbf" className='mr-12'/>
            </div>
        </Marquee>
        </section>
    );
}

export default Partners;
