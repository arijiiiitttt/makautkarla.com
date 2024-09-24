import React from 'react';
import Accordian from '../Base/Accordian';
import Baground from '../Base/Baground';
import PageA from '../Base/PageA';

const MainPg = () => {
  return (
    <>
      <div className=" justify-center flex flex-col min-h-screen items-center md:pt-26 bg-white">
        <Baground />
      </div>
      <PageA />
      <Accordian />

    </>
  );
};

export default MainPg;
