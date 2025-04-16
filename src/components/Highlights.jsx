import React from 'react'
import logo from '../assets/logo.svg';

const Highlights = () => {
    return (
        <div className="bg-[#1d1c1f] col-span-8 rounded-4xl px-6 py-6 w-full h-auto">
            <p className='text-3xl text-white mb-6'>Today Highlights</p>
            <div className='w-full flex gap-6'>
                <div className='w-1/2 px-4 py-4 bg-[#100e17] rounded-3xl flex flex-col gap-4'>
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

                <div className='w-1/2 px-4 py-4 bg-[#100e17] rounded-3xl flex flex-col gap-4'>
                    <p className='text-2xl text-[#3e3d40]'>Sunrise & Sunset</p>

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
            </div>

            <div className='w-full flex gap-6 mt-6'>
                <div className='w-1/2 px-4 py-4 bg-[#100e17] rounded-3xl flex flex-col gap-4'>
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

                <div className='w-1/2 px-4 py-4 bg-[#100e17] rounded-3xl flex flex-col gap-4'>
                    <p className='text-2xl text-[#3e3d40]'>Sunrise & Sunset</p>

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
            </div>
        </div>
    )
}

export default Highlights