import React from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { PiWaves } from "react-icons/pi";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaWind } from "react-icons/fa6";
import { formatTime, getAqiDescription } from '../utils';
import { useQuery } from 'react-query';
import { getAirQuality } from '../api/weatherAPI';
import NextForecastingComponent from './NextForecastingComponent';

const Highlights = ({ data, isLoading, isError, lat, lon }) => {

    const { data: airData } = useQuery("air-quality", () => getAirQuality(lat, lon));

    if (isError | !data) return <p className="text-white">There was an error</p>;
    if (isLoading) return <p className="text-white">Loading...</p>;

    return (
        <div className='col-span-8'>
            <div className="bg-[#1d1c1f] col-span-8 rounded-2xl 2xl:rounded-4xl px-5 2xl:px-6 py-4 2xl:py-6 w-full h-auto">
                <p className='text-2xl 2xl:text-3xl text-white mb-4 2xl:mb-6'>Today Highlights</p>
                <div className='w-full flex flex-col lg:flex-row gap-4 2xl:gap-6'>
                    <div className='w-full lg:w-1/2 px-4 py-4 bg-[#0000004d] rounded-2xl 2xl:rounded-3xl flex flex-col gap-3 2xl:gap-4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Air Quality Index</p>
                            <span className='px-2 2xl:px-3 py-0.5 text-md 2xl:text-lg text-black rounded-md 2xl:rounded-lg bg-amber-200'>{getAqiDescription(airData?.list[0]?.main.aqi)}</span>
                        </div>

                        <div className='flex items-center justify-between text-white'>
                            <FaWind className='h-6 2xl:h-8 w-6 2xl:w-8' />
                            <div key={Math.random()} className='flex flex-col'>
                                <p className='text-center'>PM<sub>2.5</sub></p>
                                <p className='text-2xl 2xl:text-3xl'>{airData?.list[0]?.components.pm2_5}</p>
                            </div>
                            <div key={Math.random()} className='flex flex-col'>
                                <p className='text-center'>NO<sub>2</sub></p>
                                <p className='text-2xl 2xl:text-3xl'>{airData?.list[0]?.components.no2}</p>
                            </div>
                            <div key={Math.random()} className='flex flex-col'>
                                <p className='text-center'>SO<sub>2</sub></p>
                                <p className='text-2xl 2xl:text-3xl'>{airData?.list[0]?.components.so2}</p>
                            </div>
                            <div key={Math.random()} className='flex flex-col'>
                                <p className='text-center'>O<sub>3</sub></p>
                                <p className='text-2xl 2xl:text-3xl'>{airData?.list[0]?.components.o3}</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 px-4 py-4 bg-[#0000004d] rounded-2xl 2xl:rounded-3xl flex flex-col gap-3 2xl:gap-4'>
                        <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Sunrise & Sunset</p>

                        <div className='w-full flex items-center text-white'>
                            <div className='w-1/2 flex items-center gap-2'>
                                <IoSunnyOutline className='h-6 2xl:h-8 w-6 2xl:w-8' />
                                <div className='flex flex-col'>
                                    <p>Sunrise</p>
                                    <p className='text-2xl 2xl:text-3xl'>{formatTime(data?.sys?.sunrise)}</p>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-center gap-2'>
                                <IoMoonOutline className='h-6 2xl:h-8 w-6 2xl:w-8' />
                                <div className='flex flex-col'>
                                    <p>Sunset</p>
                                    <p className='text-2xl 2xl:text-3xl'>{formatTime(data?.sys?.sunset)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row gap-6 mt-6'>
                    <div className='w-full lg:w-1/2 flex gap-6'>
                        <div className='w-1/2 bg-[#0000004d] px-4 py-3 2xl:py-4 rounded-2xl 2xl:rounded-3xl'>
                            <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Humidity</p>

                            <div className='mt-4 flex items-center justify-between text-white'>
                                <WiHumidity className="h-7 2xl:h-9 w-7 2xl:w-9" />
                                <p className='text-2xl 2xl:text-3xl'>{data?.main?.humidity}<span className='text-2xl'>%</span></p>
                            </div>
                        </div>

                        <div className='w-1/2 bg-[#0000004d] px-4 py-3 2xl:py-4 rounded-2xl 2xl:rounded-3xl'>
                            <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Pressure</p>

                            <div className='mt-4 flex items-center justify-between text-white'>
                                <PiWaves className="h-7 2xl:h-9 w-7 2xl:w-9" />
                                <p className='text-2xl 2xl:text-3xl'>{data?.main?.pressure} <span className='text-2xl'>hba</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex gap-6'>
                        <div className='w-1/2 bg-[#0000004d] px-4 py-3 2xl:py-4 rounded-2xl 2xl:rounded-3xl'>
                            <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Visibility</p>

                            <div className='mt-4 flex items-center justify-between text-white'>
                                <MdOutlineRemoveRedEye className="h-7 2xl:h-9 w-7 2xl:w-9" />
                                <p className='text-2xl 2xl:text-3xl'>{(data?.visibility) / 1000} <span className='text-2xl'>KM</span></p>
                            </div>
                        </div>

                        <div className='w-1/2 bg-[#0000004d] px-4 py-3 2xl:py-4 rounded-2xl 2xl:rounded-3xl'>
                            <p className='text-xl 2xl:text-2xl text-[#3e3d40]'>Feels Like</p>

                            <div className='mt-4 flex items-center justify-between text-white'>
                                <CiTempHigh className="h-7 2xl:h-9 w-7 2xl:w-9" />
                                <p className='text-2xl 2xl:text-3xl'>{data?.main?.feels_like}&deg;<span className='text-2xl'>C</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NextForecastingComponent lat={lat} lon={lon}/>
        </div>
    )
}

export default Highlights