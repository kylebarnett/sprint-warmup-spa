import React from 'react';
import RMCard from '../RMCharacters/RMCard';
import '../../App.css';

export default function RMList(props) {
  return (
    <div className="rm-list-container">
      {props.friends.map(friend => (
        <RMCard friend={friend} key={friend.id} />
      ))}
    </div>
  )
}