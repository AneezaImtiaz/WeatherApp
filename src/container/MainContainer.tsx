import React, { useState } from 'react';
import { Search, Loader, MessageDialog, WeatherInfoCard } from '../components';
import { fetchWeatherData } from '../api/WeatherApi';
import {ERROR_DIALOG, CLOSE, TRY_AGAIN, SEARCH} from '../utils/Constants';
import './MainContainer.css';

type MainContainerProps = {};

const MainContainer: React.FC<MainContainerProps> = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<any>();
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [loader, setLoader] = useState(false);

    const weatherInfo = async (city: string) => {
        try {
            setLoader(true);
            setCity(city);
            const data = await fetchWeatherData(city);
            setWeatherData(data);
        } catch (e) {
            setShowErrorDialog(true);
        } finally {
            setLoader(false);
        }
    };

    const renderErrorConnectionDialog= () => {
        return (
            <MessageDialog
                title={ERROR_DIALOG.title}
                description={ERROR_DIALOG.description}
                button={TRY_AGAIN}
                closeButton={CLOSE}
                onClose={() => { setShowErrorDialog(false); }}
                onButtonClick={() => { setShowErrorDialog(false); weatherInfo(city); }}
            />
        );
    };

    return (
        <div className="App">
            <div className="Search">
                <Search buttonClick={(city) => weatherInfo(city)} placeholder={`${SEARCH} city here...`} />
            </div>
            {showErrorDialog && renderErrorConnectionDialog()}
            {loader ? (
                <Loader />
            ) : (weatherData &&
                <WeatherInfoCard item={weatherData} />

            )}
        </div>
    );
};
export default MainContainer;
