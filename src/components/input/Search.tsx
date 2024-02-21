import React, { useState } from 'react';

export type SearchProps = {
  buttonClick: ((value: string) => void);
};

const Search: React.FC<SearchProps> = ({ buttonClick = () => null, }) => {
  const [city, setCity] = useState('');

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => buttonClick(city)}>Search</button>
    </div>
  );
};
export default Search;
