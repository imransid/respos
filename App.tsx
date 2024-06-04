import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import HomeScreen from './src/app/screens/HomeScreen/HomeScreen';
import DrawerNavigator from './src/app/navigators/drawerNavigator';
import PaymentScreen from './src/app/screens/PaymentScreen/PaymentScreen';
import { MyContext } from './src/app/context/Context';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [cart, setCart] = useState([]);
  return (
    <MyContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              title: ' ',
              headerStyle: { backgroundColor: '#04a744' },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

export default App;
