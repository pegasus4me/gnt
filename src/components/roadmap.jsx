import React from 'react';
import roadmap from "../assets/roadmap.png"
const Roadmap = () => {
    return (
        <section className='mt-10 ml-36' id='roadmap'>
            <h3 className='text-yellow-200 font-bold text-3xl font-display'>GNT Roadmap</h3>
            <img src={roadmap} alt="project roadmap" />
        </section>
    );
}

export default Roadmap;
