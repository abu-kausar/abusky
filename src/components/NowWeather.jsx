import React from 'react'
import { BsCloudSun } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

const NowWeather = () => {
    return (
        <div className="bg-[#1d1c1f] rounded-4xl px-6 py-6 flex flex-col gap-3 text-white">
            <p className="text-3xl">Now</p>
            <div className="flex items-center justify-between">
                <p className="text-6xl">17&deg;C</p>
                <BsCloudSun />
            </div>
            <p className="text-2xl">Overcast Clouds</p>
            <div className="pt-4 border-t border-[#3e3d40] flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <SlCalender />
                    <p>Thursday 16 Apr</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaLocationDot />
                    <p>Toronto, Canada</p>
                </div>
            </div>
        </div>
    )
}

export default NowWeather