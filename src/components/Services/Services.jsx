import React from 'react'
import { UpdateFollower } from "react-mouse-follower"
import { motion } from "framer-motion"
import icon1 from "../../assets/icons/obj1.png"
import icon2 from "../../assets/icons/obj2.png"
import icon3 from "../../assets/icons/obj3.png"

const servicesData = [
    {id:1, delay:0.4, image: icon1, title:"Security", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas eligendi illum eos mollitia quod ",},
    {id:2, delay:0.6, image: icon2, title:"Gurantee", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas eligendi illum eos mollitia quod necessitatibus! Necessitatibus blanditiis quis esse"},
    {id:3, delay:0.8, image: icon3, title:"Affordability", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas eligendi illum eos mollitia quod necessitatibus! Necessitatibus blanditiis quis esse"},
]

export const fadeUp =(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        show:{
            opacity:1,
            y:0,
            scale:1,
            transition:{
                duration:0.5,
                delay:delay,
            }
        },
    }
}


function Services() {
  return (
    <>
        <section className='bg-gray-100 font-poppins py-8 overflow-hidden'>
            <div className='container py-14'>
                <motion.h1 
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                className='text-3xl font-bold text-center pb-10'>
                Services</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                { servicesData.map((data)=>{
                    return(     
                    <UpdateFollower
                    mouseOptions={{
                      backgroundColor:"white",
                      zIndex: 999,
                      followSpeed: 0.6,
                      rotate:-720,
                      mixBlendMode:"darken",
                      scale: 5,
                      backgroundElement:<motion.div>
                        <img src={data.image} alt="" />
                      </motion.div>
                    }}>
                    <motion.div 
                    variants={fadeUp(data.delay)}
                    initial="hidden"
                    whileInView="show"
                    className='flex flex-col items-center justify-center p-5 max-w-[300px] h-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                        <img src={data.image} alt="" className='w-[100px] mb-4 animate-spin-slow' />
                        <div className='text-center space-y-2'>
                        <h1 className='text-2xl font-bold'>{data.title}</h1>
                        <p className='text-center text-sm text-black/75'>{data.description}</p>
                        </div>
                    </motion.div>
                    </UpdateFollower>)
                }) 
                } 
                </div>
            </div>
        </section>
    </>
  )
}

export default Services