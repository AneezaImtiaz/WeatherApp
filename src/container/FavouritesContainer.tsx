import React, { useState, useEffect } from 'react';
import { WeatherInfoCard } from '../components';
import { WeatherItem } from '../components/cards/WeatherInfoCard';
import FlatList from 'flatlist-react';
import './MainContainer.css';

type FavouritesContainerProps = {};

export const FavouritesContainer: React.FC<FavouritesContainerProps> = () => {
    const [favourites, setFavourites] = useState<WeatherItem[]>([]);

    useEffect(() => {
        // Load favorites from local storage
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    return (
        <div>
            <FlatList
                list={favourites}
                renderItem={(item) => <WeatherInfoCard item={item} subscribedIconClick={() =>
                    setFavourites(
                        favourites?.filter(i => i?.resolvedAddress !== item?.resolvedAddress),
                    )
                } />}
                keyExtractor={(item: WeatherItem) => JSON.stringify(item.resolvedAddress)}
            />
        </div>
    );
};
export default FavouritesContainer;
