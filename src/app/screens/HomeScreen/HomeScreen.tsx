import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import HomeStyle from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import foodItems from '../../utils/foodItems';
import { Image } from 'react-native';
import FoodCard from '../../components/FoodCard/FoodCard';

export default function HomeScreen() {
  return (
    <View>
      <View style={HomeStyle.chargeBoxContainer}>
        <View style={HomeStyle.chargeBox}>
          <Text style={HomeStyle.chargeBoxSaveText}>SAVE</Text>
          <View style={HomeStyle.chargeBoxCharge}>
            <Text style={HomeStyle.chargeBoxChargeText}>CHARGE</Text>
            <Text style={HomeStyle.chargeBoxChargeText}>000.00</Text>
          </View>
        </View>
      </View>

      <View style={HomeStyle.foodItemsContainer}>
        <View style={HomeStyle.foodItemsBox}>
          <View style={HomeStyle.foodItemsBoxHeader}>
            <Text style={HomeStyle.foodItemsBoxHeaderText}>COFFEE HUB</Text>
            <AntDesign name="caretdown" size={30} color="#ccd1d1" />
            <Entypo name="magnifying-glass" size={30} color="#ccd1d1" />
          </View>
    
            <FlatList
            data={foodItems}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <FoodCard item={item}/>
            )}/>
         
        </View>
      </View>
    </View>
  );
}
