import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-yellow dib br3 pa0 ma2 grow bw2 shadow-5'>
      <img alt='photos' src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
 

export default Card;
