import React from 'react'
import headphone from "../../assets/headphone4.png"
import { delay, easeInOut, motion } from "framer-motion"
import { fadeUp } from '../Services/Services'
import { UpdateFollower } from 'react-mouse-follower'

function Banner() {
  return (
    <>
        <section>
            <div className='container py-14 grid grid-cols-1 md:grid-cols-2 gap-12 space-y-6 md:space-y-0'>
                <div className='w-full flex justify-center overflow-hidden'>
                    <motion.img
                    initial={{opacity:0, x:-100, rotate:-180}} 
                    whileInView={{opacity:1, x:0, rotate:0}}
                    transition={{duration:0.7, delay:0.2, ease: easeInOut}} 
                    src={headphone} 
                    className='w-[300px] md:w-[400px]' 
                    alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <motion.h1
                        variants={fadeUp(0.3)}  
                        initial="hidden"
                        whileInView="show"
                        className='text-3xl lg:text-4xl font-semibold font-poppins'>
                        The Latest Headphones with the Latest Technology
                        </motion.h1>
                        <motion.p
                        variants={fadeUp(0.5)}
                        initial="hidden"
                        whileInView="show">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit commodi, doloremque temporibus tenetur impedit ex omnis natus? Temporibus veniam.
                        </motion.p>
                        <UpdateFollower
                        mouseOptions={{
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode:'difference'}}
                        >
                        <motion.button 
                        variants={fadeUp(0.6)}  
                        initial="hidden"
                        whileInView="show"
                        className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'>Shop Now</motion.button>
                        </UpdateFollower>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner