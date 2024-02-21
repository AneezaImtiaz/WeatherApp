import React, { useState } from 'react';
import { Search, Loader, Header, MessageDialog } from '../components';
import { fetchWeatherData } from '../api/WeatherApi';
import './MainContainer.css';

type MainContainerProps = {};

const MainContainer: React.FC<MainContainerProps> = () => {
    const [city, setCity] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loader, setLoader] = useState(false);

    const weatherInfo = async (city: string) => {
        try {
            setLoader(true);
            setCity(city);
            const data = await fetchWeatherData(city);
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
                onClose={() => { setShowErrorModal(false); weatherInfo(city); }}
            />
        );
    };

    return (
        <div className="App">
            <Header />
            <div className="Search">
                <Search buttonClick={(city) => weatherInfo(city)} />
            </div>
            {showErrorModal && renderErrorConnectionModal()}
            {loader ? (
                <Loader />
            ) : (
                null)}
            <footer className="App-footer">
                <p>&copy; 2024 Weather App</p>
            </footer>
        </div>
    );
};
export default MainContainer;
