import React from 'react';
import data from './Data/data.json';
import ScrollableTabsButtonAuto from './Components2/tab';
import ControlledAccordions from './Components2/accordion';
export default function Exercise2() {
  return (
    <div>
      <ScrollableTabsButtonAuto data={data} /> 
      <ControlledAccordions data={data}/>
    </div>
  );
}

