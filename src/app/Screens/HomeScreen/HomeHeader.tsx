import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import HomeHeaderStyle from './homeHeaderStyle';
import Bar from '../../Images/bar';
import UserPLus from '../../Images/userPlus';
import ThreeDot from '../../Images/threeDot';

function HomeHeader() {
  return (
    <View style={HomeHeaderStyle.headerBar}>
      <View style={HomeHeaderStyle.headerLeft}>
        <Bar style={HomeHeaderStyle.headerMenu} />
        <Text style={HomeHeaderStyle.headerHeading}>Ticket</Text>
        <View style={HomeHeaderStyle.orderNumBox}>
          <Text style={HomeHeaderStyle.orderNumBoxText}>1</Text>
        </View>
      </View>
      <View style={HomeHeaderStyle.headerRight}>
        <UserPLus style={HomeHeaderStyle.userPlus} />
        <ThreeDot style={HomeHeaderStyle.threeDot} />
      </View>
    </View>
  );
}

export default HomeHeader;
