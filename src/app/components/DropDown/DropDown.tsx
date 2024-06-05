import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';

const data = [
  {label: 'Dine-In', value: '1'},
  {label: 'Home-Delivery', value: '2'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={Styles.item}>
        <Text style={Styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={Styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <View>
      <Dropdown
        style={Styles.dropdown}
        selectedTextStyle={Styles.selectedTextStyle}
        iconStyle={Styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Option"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={Styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={renderItem}
        placeholderStyle={{color: '#454545'}}
      />
      <View style={Styles.underLine}></View>
    </View>
  );
};

export default DropdownComponent;
