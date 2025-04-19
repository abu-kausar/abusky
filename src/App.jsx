import Header from "./components/Header"
import Highlights from "./components/Highlights";
import NowWeather from "./components/NowWeather";
import WeekForecastComponent from "./components/WeekForecastComponent";
import { useQuery } from "react-query";
import { getCurrentWeather } from "./api/weatherAPI";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [latLon, setLatLon] = useState({ lat: 23.8103, lon: 90.4125 }); //default value Dhaka

  const { data, isLoading, isError } = useQuery(
    ['current-weather', latLon?.lat, latLon?.lon],
    () => getCurrentWeather(latLon.lat, latLon.lon),
    {
      enabled: !!latLon
    }
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col h-screen w-full">
      <Header setLatLon={setLatLon} />
      <div className="bg-[#131214] flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="flex flex-col gap-4 2xl:gap-6 col-span-4 rounded-4xl">
            <NowWeather data={data} isLoading={isLoading} isError={isError} />
            <WeekForecastComponent lat={latLon?.lat} lon={latLon?.lon} />
          </div>
          <Highlights data={data} isLoading={isLoading} isError={isError} lat={latLon?.lat} lon={latLon?.lon} />
        </div>
      </div>
    </div>
  )
}

export default App