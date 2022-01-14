import React, { useEffect } from 'react';
import GlobalState from './src/globalState/GlobalState';
import Routes from './src/navigation/routes';
import SplashScreen from 'react-native-splash-screen';



const App =()=> {

  useEffect(() => {
    SplashScreen.hide();
  },[])

  return (
    <GlobalState>
      <Routes/>
      </GlobalState>
  );
};

export default App;
