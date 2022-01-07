import React from 'react';
import {Image, View, StyleSheet, TextInput} from 'react-native';

import SearchIcon from '../assets/images/icon/searchIcon.png';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBar}>
        <Image source={SearchIcon} style={styles.SearchIconStyle} />
        <TextInput
          placeholder="Search for Room Color etc..."
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#6f6f6f',
    borderRadius: 8,
  },
  textInput: {
   color: '#f5f5f5',
    fontSize: 16,
    paddingRight: '20%'
  },
  SearchIconStyle: {
    height: 13,
    marginLeft: '7%',
    marginRight: '3%'
  }
});

export default SearchBar;
