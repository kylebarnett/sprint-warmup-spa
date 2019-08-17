import React from 'react';
import RMLocationCard from '../RMLocation/RMLocationCard';
import '../../App.css';

export default function RMList(props) {
  return (
    <div className="rm-list-container">
      {props.location.map(spot => (
        <RMLocationCard spot={spot} key={spot.id} />
      ))}
    </div>
  )
}