import React, { useContext } from 'react';
import { Text, Image, View } from 'react-native';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MyContext } from '../../context/Context';

export default function FoodCard({ item, onSelect }) {
  const { setCart } = useContext(MyContext);

  const handlePress = () => {
    onSelect(item)   // selecte items to get price
    setCart((prevCart) => [...prevCart, item]);  // number of selected items in cart
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={{ uri: item.img }} style={Styles.image} />
        <View style={Styles.overlay}>
          <Text style={Styles.imageTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
