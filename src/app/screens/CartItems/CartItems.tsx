import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Styles from './Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
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

  // calculate the total cost
  const getTotalCost = () => {
    let totalCost = 0;
    Object.values(cartItemInfo).forEach(itemCost => {
      totalCost += itemCost.totalPrice;
    });
    return totalCost;
  };

  const totalCost = getTotalCost();

  // go to payment screen
  const showBill = () => {
    navigation.navigate('PaymentScreen', {totalAmount: totalCost});
  };

  // show Cart
  const showCart = () => {
    navigation.navigate('CartItems', CartItems);
  };

  return (
    <View style={Styles.container}>
      <DropdownComponent></DropdownComponent>

      {/* show the cart items with quantity and price */}
      <FlatList
        data={Object.keys(cartItemInfo)}
        keyExtractor={itemName => itemName}
        renderItem={({item: itemName}) => {
          const itemInfo = cartItemInfo[itemName];
          return (
            <View style={Styles.cartItemsPos}>
              <Text style={Styles.cartItemsText}>
                {itemName}{' '}
                <Text style={Styles.quantityText}>x{itemInfo.quantity}</Text>
              </Text>
              <Text style={Styles.cartItemsText}>
                Tk {itemInfo.totalPrice.toFixed(2)}
              </Text>
            </View>
          );
        }}
      />
      <View
        style={Styles.verticalLine}></View>
      <View style={Styles.totalPricePos}>
        <Text style={Styles.totalPriceText}>Total Price : </Text>
        <Text style={Styles.totalPriceVal}>Tk {totalCost.toFixed(2)}</Text>
      </View>
      <View style={Styles.expensesBox}>
        <TouchableOpacity
          onPress={() => {
            showCart();
          }}>
          <Text style={Styles.expensesBoxSaveText}>SAVE</Text>
        </TouchableOpacity>
        <View style={Styles.expensesBoxCharge}>
          <TouchableOpacity
            onPress={() => {
              showBill();
            }}>
            <Text style={Styles.expensesBoxChargeText}>CHARGE</Text>
            <Text style={Styles.expensesBoxChargeText}>
              {totalCost.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
}
