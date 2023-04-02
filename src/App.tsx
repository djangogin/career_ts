// import React, {createElement as e, useState} from 'react';
// import {Product} from './components/Product'
// import {products} from './data/products'

import React from "react";
import OrganizationalChart from "./components/orgChart";
// import Button from "./components/button";
import employees from "./data/data_2";

function App() {
//
    return (
    <>
        {/*<Button onClick={() => { console.log('!!!!'); }}>Нажми меня</Button>*/}
      <h1 className="title">Приемники ГК Росатом</h1>
      <OrganizationalChart data={employees} />



    </>
  );
}

export default App;
