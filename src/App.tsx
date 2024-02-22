import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { MainContainer } from './container';
import { FavouritesContainer } from './container';
import { Header } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={MainContainer} />
          <Route path="/favourites" Component={FavouritesContainer} />
        </Routes >
      </div>
    </Router>
  );
};
export default App;