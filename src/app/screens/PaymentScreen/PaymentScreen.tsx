import React from 'react';
import {Text, View} from 'react-native';
import Style from '../PaymentScreen/style';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import { useRoute } from '@react-navigation/native';

export default function PaymentScreen() {
  const route = useRoute();
  const totalAmount = route.params || 0;
  return (
    <View style={Style.container}>
      <View style={Style.payAmount}>
        <Text style={Style.billText}>Tk {totalAmount}</Text>
        <Text style={Style.dueText}>Total amount due</Text>
      </View>
      <View style={Style.cashInputPos}>
        <Text style={Style.cashReceivedText}>Cash received</Text>
        <TextInput placeholder="Enter amount" maxLength={18} placeholderTextColor={'#454545'}/>
        <View style={Style.cashInput}></View>
      </View>
      <View style={Style.cashPayButtonPos}>
        <TouchableOpacity style={Style.cashPayButton}>
          <View style={Style.cashIconText}>
          <Icon1 name="cash" size={40}></Icon1>
          <Text style={Style.cashPayText}>CASH</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Style.cardPayButtonPos}>
        <TouchableOpacity style={Style.cardPayButton}>
          <View style={Style.cardIconText}>
          <Icon2 name="credit-card" size={35} style={Style.cardIconPos}></Icon2>
          <Text style={Style.cardPayText}>CARD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
