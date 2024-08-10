import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower"
import { easeInOut, motion, AnimatePresence } from "framer-motion"
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";

const headphoneData = [
    {id:1, image: Headphone1, title: "Headphone Wireless", price: "₹2500", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor nobis ex consectetur. Error sit harum omnis fugiat culpa optio quod quidem alias sunt animi!", modal: "Modal Brown", bgColor: "#8b5958"},
    {id:2, image: Headphone2, title: "Headphone Wireless", price: "₹2500", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor nobis ex consectetur. Error sit harum omnis fugiat culpa optio quod quidem alias sunt animi!", modal: "Lime Green", bgColor: "#638153"},
    {id:3, image: Headphone3, title: "Headphone Wireless", price: "₹2500", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor nobis ex consectetur. Error sit harum omnis fugiat culpa optio quod quidem alias sunt animi!", modal: "Ocean Blue", bgColor: "#5d818c"},
]

const fadeUp =(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
            scale:0.5,
        },
        show:{
            opacity:1,
            y:0,
            scale:1,
            transition:{
                duration:0.5,
                delay:delay,
                ease:easeInOut,
            }
        },
        exit:{
            opacity:0,
            y:50,
            scale:0.5,
            transition:{
                duration:0.2,
                ease:easeInOut,
            }
        }
    }
}

function Hero() {

    const [activeData, setActiveData] = useState(headphoneData[0])
    const handleData = (data)=>{
        setActiveData(data);
    }

    return (
    <>
        <section className='bg-brandDark text-white font-varela overflow-hidden'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
            {/* headphone description and main heading */}
            <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]:'>
                <div className='space-y-5 text-center md:text-left'>
                    <AnimatePresence mode="wait">
                    <UpdateFollower
                    mouseOptions={{
                      backgroundColor: '#ffffff',
                      zIndex: 999,
                      followSpeed: 1.5,
                      rotate:-720,
                      scale: 10,
                      mixBlendMode:'difference'
                    }}>
                   <motion.h1 
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                   className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}
                   </motion.h1>
                   </UpdateFollower>
                   </AnimatePresence>
                   <AnimatePresence mode='wait'>
                   <motion.p 
                   key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                   className='text-sm leading-loose text-white/80'>{activeData.description}</motion.p>
                   </AnimatePresence>
                   <AnimatePresence mode='wait'>
                   <UpdateFollower
                    mouseOptions={{
                      backgroundColor:activeData.bgColor,
                      zIndex: 999,
                      followSpeed: 1.5,
                      rotate:-720,
                      scale: 5,
                      backgroundElement:<div>
                        <img src={activeData.image} alt="" />
                      </div>
                    }}>
                   <motion.button 
                   key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                   style={{backgroundColor: activeData.bgColor}} className='px-4 py-2 inline-block font-normal rounded-sm'>
                    Buy and Listen
                   </motion.button>
                    </UpdateFollower>
                   </AnimatePresence>

            {/* headphone description and list separator */}

                    <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        <div className='w-20 h-[1px] bg-white'></div>
                        <p className='uppercase text-sm'> Top Headphones for you</p>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>

            {/* headphone list switcher */}
                   <div className='grid grid-cols-3 gap-10'>
                    {headphoneData.map((items)=>{
                        return(
                            <UpdateFollower
                    mouseOptions={{
                      backgroundColor:items.bgColor,
                      zIndex: 999,
                      followSpeed: 1.5,
                      rotate:-720,
                      scale: 5,
                      text:"View Details",
                      textFontSize:"2.5px",
                      textColor:"white"
                    }}>
                            <div key={items.id} 
                                onClick={()=>handleData(items)}
                             className='grid grid-cols-2 place-items-center cursor-pointer'>
                                <div>
                                    <img className='w-[200px]' src={items.image} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-base font-bold'>{items.price}</p>
                                    <p className='text-xs font-normal  text-nowrap'>{items.modal}</p>
                                </div>
                            </div>
                            </UpdateFollower>
                        )
                    })}
                   </div> 
                </div>
            </div>

            {/* main large headphone image section */}
            <div className='flex flex-col justify-end items-center overflow-y-hidden'>
            <AnimatePresence mode="wait">
                <motion.img 
                key={activeData.id}
                initial={{opacity:0, y:100, scale:0.9}}
                animate={{opacity:1, y:0, scale:1}}
                exit={{opacity:0, y:100, scale:0.9,
                    transition:{
                        duration:0.2,
                    },
                }}
                transition={{durationo:0.4, delay:0.2, ease: easeInOut}}
                src={activeData.image} 
                alt="#" 
                className='w-[300px] md:w-[400px] xl:w-[550px]' />
            </AnimatePresence>
            </div>
             
                 <div  className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999]
                mix-blend-difference'>
                <a href="">
                <FaWhatsapp/>
                </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero