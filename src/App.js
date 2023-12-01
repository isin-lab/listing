import React from 'react';

import Listing from './components/stars'

import data from './components/etsy.json';


console.log(data)








function App() {
  return (
   <Listing items={data}/>
  );
}

export default App;
