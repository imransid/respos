import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import DropdownComponent from '../../components/DropDown/DropDown';
import {MyContext} from '../../context/Context';

export default function CartItems() {
  const navigation = useNavigation();
  const {cart} = useContext(MyContext);

  // Get cart item names and occurrences
  const getCartItemInfo = () => {
    const cartItemInfo = {};
    cart.forEach(item => {
      if (cartItemInfo[item.title]) {
        cartItemInfo[item.title].quantity += 1;
        cartItemInfo[item.title].totalPrice += item.price;
      } else {
        cartItemInfo[item.title] = {
          quantity: 1,
          totalPrice: item.price,
        };
      }
    });
    return cartItemInfo;
  };

  const cartItemInfo = getCartItemInfo();

  {
    Object.keys(cartItemInfo).map(itemName => (
      <Text key={itemName}>
        {itemName} x{cartItemInfo[itemName].quantity} Tk{' '}
        {cartItemInfo[itemName].totalPrice.toFixed(2)}
      </Text>
    ));
  }

  return (
    <View style={Styles.container}>
      <DropdownComponent></DropdownComponent>

      <FlatList
        data={Object.keys(cartItemInfo)}
        keyExtractor={itemName => itemName}
        renderItem={({item: itemName}) => {
          const itemInfo = cartItemInfo[itemName];
          return (
            <View style={{padding: 32, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>
                {itemName} x{itemInfo.quantity}
              </Text>
              <Text>Tk {itemInfo.totalPrice.toFixed(2)}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
