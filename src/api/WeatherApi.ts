import axios from 'axios';

const API_KEY = 'QVWDCPX8BWD8NHD4MELTC7R6N';

export async function fetchWeatherData(
  cityName: string,
  ): Promise<[]> {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}` 
      );
  // Check if the request was successful
  if (response?.status === 200) {
    return response?.data;
  } else {
    throw new Error('Failed to fetch weather data');
  }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw null;
  }
}