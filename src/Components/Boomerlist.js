import React from 'react';
import CollectionCard from './CollectionCard';
import './Boomerlist.css'

const Boomerlist = ({BoomerListData, setSelectedBoomer}) => {
  return (<div className = 'boomerList'>
      {BoomerListData.map(boomer =>(
          <div onClick={() => setSelectedBoomer(boomer.token_id)}>
              <CollectionCard 
              key={boomer.token_id}
              id={boomer.token_id}
              name={boomer.name}
              traits={boomer.traits}
              image={boomer.image_url}
              />
          </div>
      ))}
  </div>);
};

export default Boomerlist;
