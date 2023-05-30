import React from 'react';
import { useState } from 'react';
import {motion, } from 'framer-motion'

const TextFrame = ({text}) => {

    const split = text.split(" ")

    // INITIALISER LES ANIMATIONS CONTAINER ET SON CHILD === Texte
    const container = {
        // 2 etapes  : ( hidden , visible)
        hidden : {opacity : 0},
        visible : (i = 1)  => ({
            opacity : 1,
            transition : {
                staggerChildren : 0.12, 
                delayChildren : 0.04 * i
            }
        })
    }
    const child = {
        visible : {
            opacity: 1, 
            x : 0,
                transition : {
                    type:  "spring", 
                    damping: 12,
                    stiffness : 100,
                }
        },
        hidden : {
            opacity : 0,
            x :10,
            transition : {
                type : "spring",
                damping : 12,
                stiffness : 100,
            }
        },
        
    }
    
    return (
        <motion.div className='font-bold text-2xl flex justify-center mt-5 md:text-5xl lg:text-7xl'
        variants={container}
        initial= "hidden"
        animate = "visible"
        >
        {split.map((p, index) => {
            return <motion.span key={index}
            variants={child} className="ml-1 text-white font-display">
                {p}
            </motion.span>
        })}
            
        </motion.div>
    );
}

export default TextFrame;
