import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { capitalizeFirstLetter, formatDate } from '../utils';

const NowWeather = ({data, isLoading, isError}) => {
    if (isError | !data) return <p className="text-white">There was an error</p>;
    if (isLoading) return <p className="text-white">Loading...</p>;

    const imageUrl = `${import.meta.env.VITE_OPENWEATHER_ICON_URL}/${data?.weather[0]?.icon}@2x.png`;

    return (
        <div className="bg-[#1d1c1f] rounded-4xl px-6 py-6 flex flex-col text-white">
            <p className="text-3xl">Now</p>
            <div className="flex items-center justify-between">
                <p className="text-6xl">{data?.main?.temp}&deg;<sup className='text-3xl'>C</sup></p>
                <img
                    src={imageUrl}
                    alt="weather icon"
                    className='w-20 h-20'
                />
            </div>
            <p className="text-2xl">{capitalizeFirstLetter(data?.weather[0]?.description)}</p>
            <div className="mt-3 pt-4 border-t border-[#3e3d40] flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <SlCalender />
                    <p>{formatDate(data?.dt)}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaLocationDot />
                    <p>{data?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default NowWeather