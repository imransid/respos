import React from 'react';
import {Alert, Pressable, Text} from 'react-native';
import {Image, View} from 'react-native';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FoodCard({item}) {
  return (
    <>
      <Pressable onPress={()=>{Alert.alert('hi')}} style={Styles.itemContainer}>
        <Image source={{uri: item.img}} style={Styles.image} />
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.description}>{item.description}</Text>
      </Pressable>
    </>
  );
}
