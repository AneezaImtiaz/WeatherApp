import React from 'react';
import './WeatherInfoCard.css';

type WeatherInfoCardProps = {
    item: {
        imageUrl: string;
        resolvedAddress: string;
        description: string;
        currentConditions: {
            temp: string;
            humidity: string;
            windspeed: string;
        };
    };
};

const WeatherInfoCard: React.FC<WeatherInfoCardProps> = ({ item }) => {
    return (
        <div className="container">
            <div className="image-container">
                <img src={item?.imageUrl} alt="City" className="image" />
            </div>
            <h2>Current Weather in {item?.resolvedAddress}</h2>
            <p>Temperature: {item?.currentConditions.temp}&deg;{ }</p>
            <p>Conditions: {item?.description}</p>
            <p>Humidity: {item?.currentConditions?.humidity}%</p>
            <p>Wind: {item?.currentConditions?.windspeed}</p>
        </div>
    );
};

export default WeatherInfoCard;
