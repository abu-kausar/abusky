import React from 'react'
import { useQuery } from 'react-query';
import { getFiveDaysForecast } from '../api/weatherAPI';
import { formatDate, formatTime } from '../utils';

const WeekForecastComponent = ({ lat, lon }) => {
    const { data, isLoading, isError } = useQuery("weekly-weather", () => getFiveDaysForecast(lat, lon));

    if (isError | !data) return <p className="text-white">There was an error</p>;
    if (isLoading) return <p className="text-white">Loading...</p>;

    return (
        <>
            <p className='text-white text-2xl'>Next 24 Hours Forecast</p>
            <div className="bg-[#1d1c1f] rounded-4xl px-6 py-6 flex flex-col gap-4 text-white">
                {
                    data?.list?.slice(0, 8).map((day, index) => (
                        <div key={index} className='flex items-center justify-between'>
                            <p>{day?.main?.temp}&deg;<sup>c</sup></p>
                            <p>{formatTime(day?.dt)}</p>
                            <p>{formatDate(day?.dt)}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WeekForecastComponent