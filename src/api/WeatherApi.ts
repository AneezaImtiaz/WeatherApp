import axios from 'axios';

const API_KEY = 'QVWDCPX8BWD8NHD4MELTC7R6N';
const UNSPLASH_ACCESS_KEY = 'h3whuJcmsrQqwqq_9VKyLhdqWdLkPLRj3Nc655d_TCk';

export async function fetchWeatherData(
  cityName: string,
  ): Promise<[]> {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}` 
      );
  // Check if the request was successful
  if (response?.status === 200) {
    const imageResponse = await axios.get(`https://api.unsplash.com/photos/random?query=city&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}&count=1&lat=${response?.data?.latitude}&lng=${response?.data?.longitude}`);
    if (imageResponse.status === 200 && imageResponse.data.length > 0) {
      return {...response?.data, imageUrl : imageResponse?.data[0]?.urls?.regular};
    } else {
      throw new Error('Failed to fetch city image');
    }
  } else {
    throw new Error('Failed to fetch weather data');
  }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw null;
  }
}