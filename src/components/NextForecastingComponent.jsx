import React from 'react'
import { useQuery } from 'react-query';
import { getFiveDaysForecast } from '../api/weatherAPI';
import { formatDate, formatTime } from '../utils';

const NextForecastingComponent = ({ lat, lon }) => {
    const { data, isLoading, isError } = useQuery("fivedays-weather", () => getFiveDaysForecast(lat, lon));

    if (isError | !data) return <p className="text-white">There was an error</p>;
    if (isLoading) return <p className="text-white">Loading...</p>;

    return (
        <div>
            <h1 className='text-white text-2xl my-6'>Next 120 hours long forecast (3 hours interval)</h1>

            <div className='w-full flex justify-evenly flex-wrap gap-5'>
                {
                    data?.list?.map((day, index) => (
                        <div key={index} className='flex flex-col text-center rounded-2xl text-white gap-3 px-5 py-4 bg-[#1d1c1f]'>
                            <p>{formatDate(day?.dt)}</p>
                            <p>{formatTime(day?.dt)}</p>
                            <img 
                                src={`${import.meta.env.VITE_OPENWEATHER_ICON_URL}/${day?.weather[0]?.icon}@2x.png`} 
                                alt="weather" 
                                className='mx-auto w-10 h-10'
                            />
                            <p>{day?.main?.temp}&deg;<sup>c</sup></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NextForecastingComponent