import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HomeStyle from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import foodItems from '../../utils/foodItems';
import FoodCard from '../../components/FoodCard/FoodCard';
import {useNavigation} from '@react-navigation/native';
import {MyContext} from '../../context/Context';
import CartItems from '../CartItems/CartItems';
import SearchFoods from '../../components/SearchFoods/SearchFoods';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const {cart, setCart} = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoodItems, setFilteredFoodItems] = useState(foodItems);
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    if (searchQuery.length> 0) {
      const filtered = foodItems.filter(item =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFoodItems(filtered);
    } else{
      setFilteredFoodItems([])
    }
  }, [searchQuery]);

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
    setTotalPrice(0);
    setCart([]);
  };

  // show Cart
  const showCart = () => {
    navigation.navigate('CartItems', CartItems);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <View style={HomeStyle.homeContainer}>
      <View style={HomeStyle.expensesBox}>
        <TouchableOpacity
          onPress={() => {
            showCart();
          }}>
          <Text style={HomeStyle.expensesBoxSaveText}>SAVE</Text>
        </TouchableOpacity>
        <View style={HomeStyle.expensesBoxCharge}>

            <Text style={HomeStyle.expensesBoxChargeText}>CHARGE</Text>
            <Text style={HomeStyle.expensesBoxChargeText}>
              {totalPrice.toFixed(2)}
            </Text>
        </View>
      </View>
      <View style={HomeStyle.foodItemsBox}>
        <View style={HomeStyle.foodItemsBoxHeader}>
          <Text style={HomeStyle.foodItemsBoxHeaderText}>COFFEE HUB</Text>
          <View style={HomeStyle.foodItemsBoxHeaderIcons}>
            <TouchableOpacity>
              <Icon name="caret-down" size={25} color="#454545" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSearchBox}>
              <Icon1
                name="magnifying-glass"
                size={20}
                color="#454545"
                style={{marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {showSearchBox && (
          <SearchFoods
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredFoodItems.length>0 ? filteredFoodItems : foodItems }
          style={HomeStyle.foodItemsList}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FoodCard key={item.id} item={item} onSelect={handleSelectItem} />
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={HomeStyle.clearButton}
          onPress={handleClearSelections}>
          <Text style={HomeStyle.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
