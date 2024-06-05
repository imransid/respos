import React from 'react';
import {TextInput, View} from 'react-native';
import Styles from './Styles';

const SearchFoods = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={Styles.searchContainer}>
      <TextInput
        style={Styles.searchInput}
        placeholder="Search foods..."
        value={searchQuery}
        onChangeText={text => {setSearchQuery(text)}}
      />
    </View>
  );
};

export default SearchFoods;
