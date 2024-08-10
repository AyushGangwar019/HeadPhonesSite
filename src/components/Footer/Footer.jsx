import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Cards from "../../assets/credit-cards.webp"
import { delay, motion } from "framer-motion"
import { UpdateFollower } from 'react-mouse-follower'


function Footer() {
  return (
    <footer className='bg-primary pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <motion.div
                initaial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay:0.2,
                    duration:0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>
                        Playing
                    </h1>
                    <p className='text-sm max-w-[300px]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nesciunt ab voluptate asperiores? Sequi eos id magnam facere? Vero, aspernatur?
                    </p>
                    <div>
                        <p className='flex  items-center gap-2'>
                        <FaPhone/>
                        7895876400</p>
                        <p className='flex items-center gap-2 mt-2'>
                        {" "}
                        <FaMapLocation/>
                        Bareilly, Uttar Pradesh</p>
                    </div>
                </motion.div>
                <motion.div 
                 initaial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay:0.4,
                    duration:0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div className='space-y-6'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    </div>
                </motion.div>
                <motion.div
                 initaial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay:0.6,
                    duration:0.6,
                }}
                 className='space-y-6'>
                <h1 className='text-3xl font-bold'>Follow Me</h1>
                <UpdateFollower
                mouseOptions={{
                    scale:5,
                    mixBlendMode:"difference",
                    backgroundColor:"white"
                }}
                >
                <div className='flex items-center gap-4'>
                    <a href="https://www.facebook.com/ayush.gangwar.96995/">
                    <FaFacebook className='text-4xl hover:scale-105 duration-300'/>
                    </a>
                    <a href="https://www.instagram.com/ayushgang_019/">
                    <FaInstagram className='text-4xl hover:scale-105 duration-300'/>
                    </a>
                    <a href="#">
                    <FaTelegram className='text-4xl hover:scale-105 duration-300'/>
                    </a>
                    <a href="">
                    <FaGoogle className='text-4xl hover:scale-105 duration-300'/>
                    </a>
                </div>
                </UpdateFollower>
                <div>
                    <p className='text-xl font-semibold mb-3'>Payment Methods</p>
                    <img src={Cards} alt="" className='w-[85%]'/>
                </div>
                </motion.div>
            </div>
        </div>
    </footer>
  )
}

export default Footer