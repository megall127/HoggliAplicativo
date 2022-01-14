import React from 'react';
import GlobalState from './src/globalState/GlobalState';
import Routes from './src/navigation/routes';


const App =()=> {

  return (
    <GlobalState>
      <Routes/>
      </GlobalState>
  );
};

export default App;
