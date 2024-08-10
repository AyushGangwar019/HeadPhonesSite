import React from 'react'
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower"
import { delay, motion } from "framer-motion"

const NavbarMenu = [
    { id: 1, menuName: "Home", link: "#"},
    { id: 2, menuName: "Categories", link: "#"},
    { id: 3, menuName: "Blog", link: "#"},
    { id: 4, menuName: "About", link: "#"},
    { id: 5, menuName: "Contact", link: "#"},
]

function Navbar() {
  return (
   <>
     <div className=' bg-brandDark text-white py-4 font-varela'>
     <motion.nav
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:1, delay:0.5}}
     className='container flex justify-between items-center'>
        <div>
            <a href="#" className='text-2xl font-bold uppercase'>
                Playing / <span className='font-extralight text-white/70'>Market</span>
            </a>
        </div>
        <div className='hidden md:block'>
        <UpdateFollower
    className="sample"
      mouseOptions={{
        backgroundColor: '#ffffff',
        zIndex: 999,
        followSpeed: 1.5,
        scale: 5,
        mixBlendMode:'difference'
      }}>
            <ul className='flex items-center gap-4'>
            {
                NavbarMenu.map((items)=>(
                    <li key={items.id}>
                        <a href={items.link} className='inline-block uppercase text-sm py-2 px-3'>{items.menuName}</a>
                    </li>
                ))
                
            }
            <button className='text-xl ps-14'>
            <SlEarphones />
            </button>
            </ul>
            </UpdateFollower>
        </div>
        <div className='md:hidden'>
        <MdMenu className='text-4xl' />
        </div>
    </motion.nav>
     </div>
   </>
  )
}

export default Navbar