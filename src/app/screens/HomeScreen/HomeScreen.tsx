import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HomeStyle from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import foodItems from '../../utils/foodItems';
import FoodCard from '../../components/FoodCard/FoodCard';
import {useNavigation} from '@react-navigation/native';
import { MyContext } from '../../context/Context';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const {cart,setCart} = useContext(MyContext);
  
  // go to payment screen
  const showBill = () => {
    navigation.navigate('PaymentScreen', {totalAmount: totalPrice});
  };

  // add the prices of the selected items
  const handleSelectItem = item => {
    setTotalPrice(prevPrice => prevPrice + item.price);
  }; 

  // clear all selections
  const handleClearSelections = () => {
    setTotalPrice(0)
    setCart([])
  };

  return (
    <View style={HomeStyle.homeContainer}>
      <View style={HomeStyle.expensesBox}>
        <Text style={HomeStyle.expensesBoxSaveText}>SAVE</Text>
        <View style={HomeStyle.expensesBoxCharge}>
          <TouchableOpacity
            onPress={() => {
              showBill();
            }}>
            <Text style={HomeStyle.expensesBoxChargeText}>CHARGE</Text>
            <Text style={HomeStyle.expensesBoxChargeText}>
              {totalPrice.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={HomeStyle.foodItemsBox}>
        <View style={HomeStyle.foodItemsBoxHeader}>
          <Text style={HomeStyle.foodItemsBoxHeaderText}>COFFEE HUB</Text>
          <View style={HomeStyle.foodItemsBoxHeaderIcons}>
            <TouchableOpacity>
              <Icon name="caret-down" size={25} color="#454545" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon1
                name="magnifying-glass"
                size={20}
                color="#454545"
                style={{marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foodItems}
          style={HomeStyle.foodItemsList}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FoodCard key={item.id} item={item} onSelect={handleSelectItem} />
          )}
        />
      </View>
      <View>
        <TouchableOpacity style={HomeStyle.clearButton} onPress={handleClearSelections}>
          <Text style={HomeStyle.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
