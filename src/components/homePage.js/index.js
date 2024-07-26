import React, { useState } from 'react'
import CardDetails from './CardDetails'
import Cardbutton from './Cardbutton'

function Home() {
  const [cardType, setCardType] = useState('');

  const handleCardTypeChange = (type) => {
    setCardType(type);
  };

  return (
    <div>
        <Cardbutton handleCardTypeChange={handleCardTypeChange}/>
        <CardDetails cardType={cardType}/>
    </div>
  )
}

export default Home