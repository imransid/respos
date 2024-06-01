import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import foodStyle from './foodStyle';

function FoodItems() {
  return (
    <View>
      <View style={foodStyle.quantityExpenseContainer}>
        <View style={foodStyle.quantityExpenseBox}>
          <Text style={foodStyle.quantityExpenseSaveText}>SAVE</Text>
          <View style={foodStyle.quantityExpenseChargePos}>
            <Text style={foodStyle.quantityExpenseChargeText}>CHARGE</Text>
            <Text style={foodStyle.quantityExpenseChargeText}>000.00</Text>
          </View>
        </View>
      </View>
      <View style={foodStyle.foodItemsContainer}>
        <View style={foodStyle.foodItemsBox}>
          <Text>COFFEE HUB</Text>
        </View>
      </View>
    </View>
  );
}

export default FoodItems;
