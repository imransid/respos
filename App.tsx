import React from 'react';
import HomeScreen from './src/app/Screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeHeader from './src/app/Screens/HomeScreen/HomeHeader';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ticket" component={HomeHeader} />
      </Stack.Navigator>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={HomeScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
    //<HomeHeader/>
  );
}

export default App;
