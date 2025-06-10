import React from 'react';
import EventsBoard from './components/EventsBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>🏘️ Events Board for our Community </h1>
      <h2>Discover amazing events happening in Philly!</h2>
      <EventsBoard />
    </div>
  );
};

export default App;
