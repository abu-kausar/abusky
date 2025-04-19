import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { capitalizeFirstLetter, formatDate } from '../utils';

const NowWeather = ({data, isLoading, isError}) => {
    if (isError | !data) return <p className="text-white">There was an error</p>;
    if (isLoading) return <p className="text-white">Loading...</p>;

    const imageUrl = `${import.meta.env.VITE_OPENWEATHER_ICON_URL}/${data?.weather[0]?.icon}@2x.png`;

    return (
        <div className="bg-[#1d1c1f] rounded-2xl 2xl:rounded-4xl px-5 2xl:px-6 py-4 2xl:py-6 flex flex-col text-white">
            <p className="text-2xl 2xl:text-3xl">Now</p>
            <div className="flex items-center justify-between">
                <p className="text-4xl 2xl:text-6xl">{data?.main?.temp}&deg;<sup className='text-xl 2xl:text-3xl'>C</sup></p>
                <img
                    src={imageUrl}
                    alt="weather icon"
                    className='w-14 2xl:w-20 h-14 2xl:h-20'
                />
            </div>
            <p className="text-lg 2xl:text-2xl">{capitalizeFirstLetter(data?.weather[0]?.description)}</p>
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