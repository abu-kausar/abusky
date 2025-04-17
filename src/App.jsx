import Header from "./components/Header"
import Highlights from "./components/Highlights";
import NowWeather from "./components/NowWeather";
import WeekForecastComponent from "./components/WeekForecastComponent";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <QueryClientProvider client={client}>
        <div className="bg-[#131214] flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="flex flex-col gap-6 col-span-4 rounded-4xl">
              <NowWeather />
              <WeekForecastComponent />
            </div>
            <Highlights />
          </div>
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App