import React from 'react'
import profile1 from "../assets/image/profile1.png";
import business from "../assets/image/business.jpg"
import { IoLogoInstagram } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";

function Digital_Card() {
  return (
    <div className='relative h-screen w-full bg-cover'>
        {/* <img src={business} alt="Business" className='absolute inset-0 w-full h-full object-cover' style={{opacity: 0.5}} /> */}
        <div>
            <div className='relative flex flex-col items-center justify-center h-full'>
                <div className='flex justify-center items-center bg-slate-300 w-64 h-48 rounded-3xl mt-5'>
                    <p className='text-black text-center text-xl font-semibold'>Company name</p>
                </div>
                <div className='bg-darkblue w-64 h-72 rounded-3xl mt-2.5'>
                    <img
                        className="h-28 w-28 rounded-full border-4 border-white -mt-14 ml-m4"
                        src={profile1}
                        alt="Profile"
                    />
                    <div className='text-center'>
                        <p className='text-white text-2xl pt-2'>Name</p>
                        <p className='text-xs pt-1'>Title</p>
                        <p className='text-white text-xs pt-4 px-8'>A digital card is a copy of a physical bank card that is stored on a phone.</p>
                    </div>
                </div>
                <div className='space-x-8 mt-8'>
                    <button className='bg-slate-300 p-1 rounded-full'><IoLogoInstagram className='text-2xl'/></button>
                    <button className='bg-slate-300 p-1 rounded-full'><BiWorld className='text-2xl'/></button>
                    <button className='bg-slate-300 p-1 rounded-full'><TiSocialFacebook className='text-2xl'/> </button>
                </div>
                <div className='mt-5 w-64'>
                    <p className='text-start text-xl'>Phone</p>
                    <p className='text-start text-xl'>Email</p>
                    <p className='text-start text-xl'>Address</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital_Card
