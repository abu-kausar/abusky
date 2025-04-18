import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg?url';
import { FaSearch } from "react-icons/fa";

const Header = ({ setLatLon }) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.length > 2) {
        fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
        )
          .then(res => res.json())
          .then(data => setSuggestions(data))
          .catch(err => console.error(err));
      } else {
        setSuggestions([]);
      }
    }, 500); // Debounce

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleSelect = (city) => {
    setSearch(`${city.name}, ${city.country}`);
    setSuggestions([]);
    setLatLon({ lat: city.lat, lon: city.lon });
  };

  return (
    <nav className="shadow-md bg-[#131214] relative z-10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className='w-10 h-10 text-white rounded-full' />
          <h2 className="text-2xl font-semibold text-white">abusky</h2>
        </div>

        {/* Right - Search */}
        <div className="relative w-64">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="pl-10 pr-2 py-1 w-full border-2 border-[#3e3d40] text-white bg-transparent rounded-md focus:outline-none"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 left-0 right-0 bg-[#1e1e20] text-white border border-gray-700 rounded-md z-50 max-h-60 overflow-auto">
              {suggestions.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(city)}
                  className="px-4 py-2 hover:bg-[#333]"
                >
                  {city.name}, {city.state ? city.state + ',' : ''} {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;