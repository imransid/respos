import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeHeader from './src/app/Screens/HomeScreen/HomeHeader';
import HomeScreen from './src/app/Screens/HomeScreen/HomeScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Ticket" component={HomeHeader} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <HomeHeader/>
      <HomeScreen/>
    </View>
    
  );
}

export default App;
