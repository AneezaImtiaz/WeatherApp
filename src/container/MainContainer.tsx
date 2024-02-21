import React from 'react';
import { Search, Header } from '../components';
import {fetchWeatherData} from '../api/WeatherApi';
import './MainContainer.css'; 

type MainContainerProps = {};

const MainContainer: React.FC<MainContainerProps> = () => {

    const weatherInfo = async (city: string) => {
        try {
          const data = await fetchWeatherData(city);
        } catch (e) {
        }
      };

    return (
        <div className="App">
        <Header />
        <div className="Search">
        <Search buttonClick={(city) => weatherInfo(city)} />
        </div>
        <footer className="App-footer">
          <p>&copy; 2024 Weather App</p>
        </footer>
      </div>
    );
};
export default MainContainer;
