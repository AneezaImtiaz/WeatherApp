import React, { useEffect, useState } from 'react';
import './WeatherInfoCard.css';
import heartIcon from '../../resources/icons/heart.png';
import heartFilledIcon from '../../resources/icons/heart_filled.png';

export type WeatherItem = {
    imageUrl: string;
    resolvedAddress: string;
    description: string;
    currentConditions: {
        temp: string;
        humidity: string;
        windspeed: string;
    };
};

type WeatherInfoCardProps = {
    item: WeatherItem;
    subscribedIconClick?: void | (() => void);
};

const WeatherInfoCard: React.FC<WeatherInfoCardProps> = ({ item,  subscribedIconClick = () => null, }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [favourites, setFavourites] = useState<WeatherItem[]>([]);

    const onPressIcon = async () => {
        localStorage.removeItem('favourites');
        if (!isSubscribed) {
            const favouritesItems = [...favourites];
            favouritesItems.push(item);
            localStorage.setItem('favourites', JSON.stringify(favouritesItems));
            setIsSubscribed(true);
        } else {
            localStorage.setItem('favourites', JSON.stringify(favourites?.filter(element => element?.resolvedAddress !== item?.resolvedAddress),));
            subscribedIconClick();
            setIsSubscribed(false);
        }
    };


    useEffect(() => {
        // Load favorites from local storage
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
            const isAlreadySubscribed = JSON.parse(storedFavourites).find(
                (element: WeatherItem) => element?.resolvedAddress === item?.resolvedAddress,
            );
            isAlreadySubscribed && setIsSubscribed(true);
        }
    }, [item]);

    return (
        <div className="container">
            <div className="image-container">
                <img src={item?.imageUrl} alt="cityImage" className="image" />
            </div>
            <div className="content">
                <h2>Current Weather in {item?.resolvedAddress}</h2>
                <div className="icon-container" onClick={onPressIcon}>
                    <img src={isSubscribed ? heartFilledIcon : heartIcon} alt="heartIcon" className="icon" />
                </div>
            </div>
            <p>Temperature: {item?.currentConditions.temp}&deg;{ }</p>
            <p>Conditions: {item?.description}</p>
            <p>Humidity: {item?.currentConditions?.humidity}%</p>
            <p>Wind: {item?.currentConditions?.windspeed}</p>
        </div>
    );
};

export default WeatherInfoCard;
