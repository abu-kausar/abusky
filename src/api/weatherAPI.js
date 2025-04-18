const getCurrentWeather = async (lat, lon) => {
    const res = await fetch(`${import.meta.env.VITE_OPENWEATHER_CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    if (!res.ok) throw new Error("Failed to fetch daily forecast");
    const data = await res.json();
    return data;
}

const getWeeklyForecast = async (lat, lon) => {
    const res = await fetch(`${import.meta.env.VITE_OPENWEATHER_WEEKLY_WEATHER_FORECAST_URL}?lat=${lat}&lon=${lon}&cnt=7&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch weekly forecast");
    const data = await res.json();
    return data;
}

const getFiveDaysForecast = async (lat, lon) => {
    const res = await fetch(`${import.meta.env.VITE_OPENWEATHER_FIVE_DAYS_WEATHER_FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    if (!res.ok) throw new Error("Failed to fetch weekly forecast");
    const data = await res.json();
    return data;
}

const getAirQuality = async (lat, lon) => {
    const res = await fetch(`${import.meta.env.VITE_OPENWEATHER_AIRQUALITY_POLLUTION_URL}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    if (!res.ok) throw new Error("Failed to fetch weekly forecast");
    const data = await res.json();
    return data;
}

export {
    getCurrentWeather,
    getWeeklyForecast,
    getFiveDaysForecast,
    getAirQuality
}