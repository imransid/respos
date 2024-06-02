import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HeaderStyle from '../screens/HomeScreen/styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
            title: 'Ticket',
          headerStyle: {backgroundColor: '#04a744'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22
          },
          user: () => (
            <Ionicons
              name="person-add"
              size={30}
              color="#fff"
              style={HeaderStyle.user}
            />
          ),
          VerticalMenu: () => (
            <Ionicons
              name="ellipsis-vertical"
              size={30}
              color="#fff"
              style={HeaderStyle.verticalMenu}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
