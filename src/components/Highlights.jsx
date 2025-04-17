import React from 'react'
import logo from '../assets/logo.svg';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { PiWaves } from "react-icons/pi";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Highlights = () => {
    return (
        <div className="bg-[#1d1c1f] col-span-8 rounded-4xl px-6 py-6 w-full h-auto">
            <p className='text-3xl text-white mb-6'>Today Highlights</p>
            <div className='w-full flex flex-col lg:flex-row gap-6'>
                <div className='w-full lg:w-1/2 px-4 py-4 bg-[#0000004d] rounded-3xl flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                        <p className='text-2xl text-[#3e3d40]'>Air Quality Index</p>
                        <span className='px-3 py-0.5 text-lg text-black rounded-lg bg-amber-200'>Fair</span>
                    </div>

                    <div className='flex items-center justify-between text-white'>
                        <img src={logo} alt="" className='h-10 w-10' />
                        {
                            Array(4).fill().map(() => (
                                <div className='flex flex-col'>
                                    <p className='text-center'>PM<sub>2.5</sub></p>
                                    <p className='text-3xl'>5.90</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='w-full lg:w-1/2 px-4 py-4 bg-[#0000004d] rounded-3xl flex flex-col gap-4'>
                    <p className='text-2xl text-[#3e3d40]'>Sunrise & Sunset</p>

                    <div className='w-full flex items-center text-white'>
                        <div className='w-1/2 flex items-center gap-2'>
                            <IoSunnyOutline className='h-10 w-10' />
                            <div className='flex flex-col'>
                                <p>Sunrise</p>
                                <p className='text-3xl'>6:30 AM</p>
                            </div>
                        </div>
                        <div className='w-1/2 flex items-center gap-2'>
                            <IoMoonOutline className='h-10 w-10' />
                            <div className='flex flex-col'>
                                <p>Sunset</p>
                                <p className='text-3xl'>6:30 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='w-full lg:w-1/2 flex gap-6'>
                    <div className='w-1/2 bg-[#0000004d] px-4 py-4 rounded-3xl'>
                        <p className='text-2xl text-[#3e3d40]'>Humidity</p>

                        <div className='mt-4 flex items-center justify-between text-white'>
                            <WiHumidity className="h-10 w-10" />
                            <p className='text-3xl'>86<span className='text-2xl'>%</span></p>
                        </div>
                    </div>

                    <div className='w-1/2 bg-[#0000004d] px-4 py-4 rounded-3xl'>
                        <p className='text-2xl text-[#3e3d40]'>Pressure</p>

                        <div className='mt-4 flex items-center justify-between text-white'>
                            <PiWaves className="h-10 w-10" />
                            <p className='text-3xl'>1001 <span className='text-2xl'>hba</span></p>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex gap-6'>
                    <div className='w-1/2 bg-[#0000004d] px-4 py-4 rounded-3xl'>
                        <p className='text-2xl text-[#3e3d40]'>Visibility</p>

                        <div className='mt-4 flex items-center justify-between text-white'>
                            <MdOutlineRemoveRedEye className="h-10 w-10" />
                            <p className='text-3xl'>6.545 <span className='text-2xl'>KM</span></p>
                        </div>
                    </div>

                    <div className='w-1/2 bg-[#0000004d] px-4 py-4 rounded-3xl'>
                        <p className='text-2xl text-[#3e3d40]'>Feels Like</p>

                        <div className='mt-4 flex items-center justify-between text-white'>
                            <CiTempHigh className="h-10 w-10" />
                            <p className='text-3xl'>15&deg;<span className='text-2xl'>C</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights