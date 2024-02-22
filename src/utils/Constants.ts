export const NO_SAVED_MODAL = {
  title: 'No favourites yet!',
  description: 'Like an item you see? Save them here to your favourites',
} as const;

export const EMPTY_SEARCH_DIALOG = {
  title: 'Note',
  description: 'You haven‘t entered any value to be searched on.',
} as const;

export const ERROR_DIALOG = {
  title: 'No Connection',
  description: 'Connection to the server failed. Please try again shortly.',
} as const;

export const TRY_AGAIN = 'Try Again' as const;
export const CLOSE = 'Close' as const;
export const SEARCH = 'Search' as const;
export const APP_TITLE = 'Weather App' as const;

export const WEATHER_INFO = {
  temperature: 'Temperature',
  conditions: 'Conditions',
  humidity: 'Humidity',
  wind: 'Wind',
} as const;


export const ROUTES = {
  home: 'Home',
  favourites: 'Favourites',
} as const;

