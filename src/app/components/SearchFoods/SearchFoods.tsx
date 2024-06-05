import React from 'react';
import {TextInput, View} from 'react-native';
import Styles from './Styles';

const SearchFoods = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={Styles.searchContainer}>
      <TextInput
        style={Styles.searchInput}
        placeholder="Search foods..."
        placeholderTextColor={'#454545'}
        value={searchQuery}
        onChangeText={text => {setSearchQuery(text)}}
        maxLength={15}
      />
    </View>
  );
};

export default SearchFoods;
