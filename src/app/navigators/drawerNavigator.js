import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Entypo'

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
            <Icon1
              name="person-add"
              size={300}
              color="#fff"
              //style={HeaderStyle.user}
            />
          ),
          VerticalMenu: () => (
            <Icon2
              name="dots-three-vertical"
              size={30}
              color="#fff"
              //style={HeaderStyle.verticalMenu}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
