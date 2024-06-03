import React from 'react';
import {Text} from 'react-native';
import {Image, View} from 'react-native';
import Styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FoodCard({item}) {
  return (
    <View style={{margin: 5}}>
      <TouchableOpacity>
        <Image source={{uri: item.img}} style={Styles.image} />
        <View style={Styles.overlay}>
          <Text style={Styles.imageTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
