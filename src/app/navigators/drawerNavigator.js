import React, { useContext } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderStyle from './styles';
import { MyContext } from '../context/Context';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  const {cart} = useContext(MyContext);

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Ticket',
          headerStyle: {backgroundColor: '#04a744'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerRight: () => (
            <View style={HeaderStyle.headerItems}>
              <View style={HeaderStyle.cart}>
                <Text style={HeaderStyle.cartText}>{cart?.length>0 ? cart?.length : 0 }</Text>
              </View>
              <TouchableOpacity>
                <Icon1
                  name="person-add"
                  size={30}
                  color="#fff"
                  style={HeaderStyle.userAddIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon2
                  name="dots-three-vertical"
                  size={30}
                  color="#fff"
                  style={HeaderStyle.verticalMenuIcon}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
