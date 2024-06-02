import React from 'react';
import {Text, View} from 'react-native';
import HomeStyle from './styles';

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
          </View>
        </View>
      </View>
    
    </View>
  );
}
