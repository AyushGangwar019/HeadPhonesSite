import React from 'react'
import { UpdateFollower } from "react-mouse-follower"

function BannerText() {
  return (
    <section className='py-12 text-center font-varela'>
        <div className='container'>
            <div className='bg-gradient-to-t from-red-600 to-orange-400/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
            <UpdateFollower
            mouseOptions={{
              backgroundColor:"black",
              zIndex:999,
              followSpeed:0.5,
              mixBlendMode: "screen",
              scale:10,
            }}
            >
                <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>
                    Headphones with Good Quality and Affordable
                </p>
            </UpdateFollower>
            </div>
        </div>
    </section>
  )
}

export default BannerText