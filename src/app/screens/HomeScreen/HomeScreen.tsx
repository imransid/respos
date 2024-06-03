import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HomeStyle from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import foodItems from '../../utils/foodItems';
import FoodCard from '../../components/FoodCard/FoodCard';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const showBill = () => {
    navigation.navigate('PaymentScreen');
  };
  return (
    <View style={HomeStyle.homeContainer}>
      <View style={HomeStyle.chargeBox}>
        <Text style={HomeStyle.chargeBoxSaveText}>SAVE</Text>
        <View style={HomeStyle.chargeBoxCharge}>
          <TouchableOpacity
            onPress={() => {
              showBill();
            }}>
            <Text style={HomeStyle.chargeBoxChargeText}>CHARGE</Text>
            <Text style={HomeStyle.chargeBoxChargeText}>000.00</Text>
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
              <Icon1 name="magnifying-glass" size={20} color="#454545" style={{marginTop: 5}}/>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foodItems}
          style={{height: 710}}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <FoodCard key={item.id} item={item} />}
        />
      </View>
    </View>
  );
}
