import React from 'react';
import Accordian from '../Base/Accordian';
import Baground from '../Base/Baground';
import PageA from '../Base/PageA';

const MainPg = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center pt-26">
        <Baground />
      </div>
    
      <Accordian />

    </>
  );
};

export default MainPg;
