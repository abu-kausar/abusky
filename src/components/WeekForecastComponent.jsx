import React from 'react'
import condition from '../assets/logo.svg?url';

const WeekForecastComponent = () => {
    return (
        <>
            <p className='text-white text-2xl'>5 Days Forebast</p>
            <div className="bg-[#1d1c1f] rounded-4xl px-6 py-6 flex flex-col gap-4 text-white">
                {
                    Array(5).fill().map(() => (
                        <div key={Math.random()} className='flex items-center justify-between'>
                            <img src={condition} alt="condition" className='text-white w-8 h-8' />
                            <p>17 Apr</p>
                            <p>Friday</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WeekForecastComponent