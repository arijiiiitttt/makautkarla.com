import React from 'react';
import Fooder from '../Base/Fooder';

const MainPg = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold bowl text-orange-300">MAKAUTKARLA.COM</h1>
        <h1 className="text-2xl mt-2 oswal">Question Papers For Makaut Students</h1>
        <p></p>
        <div className="mt-4"> {/*content*/}</div>
      </div>
      <Fooder/>
    </>
  );
};

export default MainPg;
