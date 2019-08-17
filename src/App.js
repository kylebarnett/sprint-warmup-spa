import React, { useState, useEffect } from 'react';
import RMList from './components/RMCharacters/RMList';
import RMLocationList from './components/RMLocation/RMLocationList';
import axios from 'axios';
import './App.css';
import { Route, Link } from 'react-router-dom';

function App() {

  const [friends, setFriends] = useState([])
  const [location, setLocation] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/'
      )
      .then(res => setFriends(res.data.results))
  }, []
  )
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocation(res.data.results))
  }, [])
  return (
    <div className="App">
      <Route path="/friends" render={(props) => <RMList {...props} friends={friends} />} />
      <Route path="/location" render={(props) => <RMLocationList {...props} location={location} />} />
      <Link to="/friends">Friends</Link>
      <Link to="/location">Location</Link>
    </div>
  );
}

export default App;
