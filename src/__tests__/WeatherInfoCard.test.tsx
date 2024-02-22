import { render, fireEvent, screen } from '@testing-library/react';
import {WeatherInfoCard} from '../components';
import  { WeatherItem } from '../components/cards/WeatherInfoCard';

describe('WeatherInfoCard Component', () => {
  const mockWeatherItem: WeatherItem = {
    imageUrl: 'cityImage.jpg',
    resolvedAddress: 'New York',
    description: 'Cloudy',
    currentConditions: {
      temp: '72',
      humidity: '50',
      windspeed: '10 mph',
    },
  };

  it('renders weather information correctly', () => {
    render(<WeatherInfoCard item={mockWeatherItem} />);

    expect(screen.getByText('Current Weather in New York')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 72°')).toBeInTheDocument();
    expect(screen.getByText('Conditions: Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 50%')).toBeInTheDocument();
    expect(screen.getByText('Wind: 10 mph')).toBeInTheDocument();
  });

 it('displays filled heart icon when subscribed and empty heart icon when not subscribed', () => {
    render(<WeatherInfoCard item={mockWeatherItem} />);
    
    const heartIcon = screen.getByAltText('heartIcon');
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveAttribute('src', 'heart.png');

    fireEvent.click(heartIcon);

    expect(heartIcon).toHaveAttribute('src', 'heart_filled.png');
  });
  
  it('calls subscribedIconClick callback when subscription icon is clicked', () => {
    const subscribedIconClickMock = jest.fn();
    render(<WeatherInfoCard item={mockWeatherItem} subscribedIconClick={subscribedIconClickMock} />);

    fireEvent.click(screen.getByAltText('heartIcon'));

    expect(subscribedIconClickMock).toHaveBeenCalledTimes(1);
  });

});
