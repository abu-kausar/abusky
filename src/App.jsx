import Header from "./components/Header"
import Highlights from "./components/Highlights";
import NowWeather from "./components/NowWeather";
import WeekForecastComponent from "./components/WeekForecastComponent";
import { useQuery } from "react-query";
import { getCurrentWeather } from "./api/weatherAPI";

function App() {
  const lat = 24.743448;
  const lon = 90.398384;
  const { data, isLoading, isError } = useQuery("current-weather", () => getCurrentWeather(lat, lon));

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
        <div className="bg-[#131214] flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="flex flex-col gap-6 col-span-4 rounded-4xl">
              <NowWeather data={data} isLoading={isLoading} isError={isError} />
              <WeekForecastComponent lat={lat} lon={lon}/>
            </div>
            <Highlights data={data} isLoading={isLoading} isError={isError} lat={lat} lon={lon}/>
          </div>
        </div>
    </div>
  )
}

export default App