const getCurrentWeather = async (lat, lon) => {
    const res = await fetch(`${import.meta.env.VITE_OPENWEATHER_CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    const data = await res.json();
    return data;
}

export default getCurrentWeather;