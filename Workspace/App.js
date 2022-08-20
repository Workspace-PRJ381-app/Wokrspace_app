import React from 'react';
import AppStack from './src/routes/AppStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <AppStack/>
  )
}


export default App;
