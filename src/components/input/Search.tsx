import React, { useState } from 'react';
import {SEARCH} from '../../utils/Constants';

export type SearchProps = {
  buttonClick: ((value: string) => void);
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ buttonClick = () => null, placeholder = `${SEARCH}...` }) => {
  const [city, setCity] = useState('');

  return (
    <div>
      <input type="text" placeholder={placeholder} value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => buttonClick(city)}>{SEARCH}</button>
    </div>
  );
};
export default Search;
