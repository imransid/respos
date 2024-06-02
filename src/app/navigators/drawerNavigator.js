import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HeaderStyle from '../screens/styles';
import Icon from 'react-native-vector-icons/AntDesign'

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
            <Icon
              name="user"
              size={30}
              color="#fff"
              style={HeaderStyle.user}
            />
          ),
          VerticalMenu: () => (
            <Icon
              name=""
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
