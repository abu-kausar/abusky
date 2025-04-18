# 🌤️ abusky – Your Ultimate Weather Forecasting Mate 
![1600x1200](/public/screenshot.png)
## Introduction

abusky is a powerful and user-friendly weather forecasting web application designed to provide you with real-time weather updates and detailed forecasts. Whether you're planning your day or your week, abusky gives you all the critical weather information you need in one place.

## Project Overview

For now this application included below features.

Key Features:
- Current Weather Conditions: Instantly view the latest weather data including temperature, humidity, pressure, and "feels like" temperature.
- Air Pollution Levels: Stay informed about the air quality in your area with accurate pollution readings.
- Wind Speed & Visibility: Get real-time updates on wind conditions and visibility range.
- 24-Hour Forecast: Hour-by-hour weather forecast to help you plan your day effectively.
- 5-Day Forecast (3-hour Interval): Detailed forecasts in 3-hour increments to give you a clearer picture of the days ahead.
- Sunrise & Sunset Times: Know the exact timing of sunrise and sunset for your location.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, etc.).
- Internet connection to fetch weather data from the OpenWeather API.

### Installation

- Clone the repository or download the project files to your local machine.
- Run the command `npm install`.
- After installing all dependencies, please make a account in OpenWeather and generate a `API KEY`
- Then create a `.env` file to the root folder and then copy and paste the below code (of course, please replace your api key to the place of "your_created_api_key")
    
    VITE_OPENWEATHER_API_KEY=[your_created_api_key]
    VITE_OPENWEATHER_ICON_URL=https://openweathermap.org/img/wn
    VITE_OPENWEATHER_CURRENT_WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
    VITE_OPENWEATHER_AIRQUALITY_POLLUTION_URL=https://api.openweathermap.org/data/2.5/air_pollution
    VITE_OPENWEATHER_FIVE_DAYS_WEATHER_FORECAST_URL=https://api.openweathermap.org/data/2.5/forecast
    VITE_OPENWEATHER_WEEKLY_WEATHER_FORECAST_URL=https://api.openweathermap.org/data/2.5/forecast/daily`

- Finally run the project with `npm run dev` command.

## Tech Stack
- React.js
- Tailwind CSS
- React-Query
- React icons

## Todo
- Have to do responsive for all devices. Now it is okay for large device.
- Have a plan to work with caching as here I used react-query for data fetching.
- Have a plan to add button to get current location data. 