import React, { useState } from 'react';

export type SearchProps = {
  buttonClick: ((value: string) => void);
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ buttonClick = () => null, placeholder = 'Search...' }) => {
  const [city, setCity] = useState('');

  return (
    <div>
      <input type="text" placeholder={placeholder} value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => buttonClick(city)}>Search</button>
    </div>
  );
};
export default Search;
