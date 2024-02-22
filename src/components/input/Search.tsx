import React, { useState } from 'react';
import {SEARCH, EMPTY_SEARCH_DIALOG, CLOSE} from '../../utils/Constants';
import { MessageDialog } from '../../components';

export type SearchProps = {
  buttonClick: ((value: string) => void);
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ buttonClick = () => null, placeholder = `${SEARCH}...` }) => {
  const [city, setCity] = useState('');
  const [showEmptyDialog, setShowEmptyDialog] = useState(false);

  const renderEmptyFieldDialog = () => {
    return (
        <MessageDialog
            title={EMPTY_SEARCH_DIALOG.title}
            description={EMPTY_SEARCH_DIALOG.description}
            button={CLOSE}
            onButtonClick={() => { setShowEmptyDialog(false) }}
        />
    );
};

  return (
    <div>
      <input type="text" placeholder={placeholder} value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => !city ? setShowEmptyDialog(true) : buttonClick(city)}>{SEARCH}</button>
      {showEmptyDialog && renderEmptyFieldDialog()}
    </div>
  );
};
export default Search;
