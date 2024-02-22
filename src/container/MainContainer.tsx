import React, { useState } from 'react';
import { Search, Loader, MessageDialog, WeatherInfoCard } from '../components';
import { fetchWeatherData } from '../api/WeatherApi';
import './MainContainer.css';

type MainContainerProps = {};

const MainContainer: React.FC<MainContainerProps> = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<any>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loader, setLoader] = useState(false);

    const weatherInfo = async (city: string) => {
        try {
            setLoader(true);
            setCity(city);
            const data = await fetchWeatherData(city);
            setWeatherData(data);
        } catch (e) {
            setShowErrorModal(true);
        } finally {
            setLoader(false);
        }
    };

    const renderErrorConnectionModal = () => {
        return (
            <MessageDialog
                title={'No Connection'}
                message='Connection to the server failed. Please try again shortly.'
                button={'Try Again'}
                closeButton={'Close'}
                onClose={() => { setShowErrorModal(false); }}
                onButtonClick={() => { setShowErrorModal(false); weatherInfo(city); }}
            />
        );
    };

    return (
        <div className="App">
            <div className="Search">
                <Search buttonClick={(city) => weatherInfo(city)} placeholder={'Search city here...'} />
            </div>
            {showErrorModal && renderErrorConnectionModal()}
            {loader ? (
                <Loader />
            ) : (weatherData &&
                <WeatherInfoCard item={weatherData} />

            )}
        </div>
    );
};
export default MainContainer;
