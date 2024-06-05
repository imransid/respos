import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Styles from './Styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import DropdownComponent from '../../components/DropDown/DropDown';
import {MyContext} from '../../context/Context';

export default function CartItems() {
  const navigation = useNavigation();
  const {cart} = useContext(MyContext);
  let totalCost = 0;

  const uniqueFood = [...new Set(cart)];

  // go to payment screen
  const showBill = () => {
    navigation.navigate('PaymentScreen', totalCost);
  };

  const totalPrice = () => {
    cart.forEach(element => {
      totalCost += element.price;
    });
    return totalCost;
  };
  return (
    <View style={Styles.container}>
      <DropdownComponent />

      {/* show the cart items with quantity and price */}
      {cart.length > 0 ? (
        <FlatList
          data={uniqueFood}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View key={item?.id} style={Styles.cartItemsPos}>
                <Text style={Styles.cartItemsText}>
                  {item?.title}
                  <Text> </Text>
                  <Text style={Styles.quantityText}>
                    x{cart.filter(e => e.id === item.id).length}
                  </Text>
                </Text>
                <Text style={Styles.cartItemsText}>
                  Tk {item.price * cart.filter(e => e.id === item.id).length}
                </Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={Styles.cartItemsPos}>
          <Text style={Styles.emptyCart}>No Food added in Cart</Text>
        </View>
      )}
      <View style={Styles.verticalLine}></View>
      <View style={Styles.totalPricePos}>
        <Text style={Styles.totalPriceText}>Total Price :</Text>
        <Text style={Styles.totalPriceText}>Tk {totalPrice().toFixed(2)}</Text>
      </View>
      <View style={Styles.expensesBox}>
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
