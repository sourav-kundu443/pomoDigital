import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CustomButton = ({ onPress, title, color }) => {
  return (
        <View onPress={onPress} style={[styles.ButtonContainer, {backgroundColor: color}]}>
          <Text style={styles.ButtonText}>{title}</Text>
        </View>
      )
};

const styles = StyleSheet.create({
    // ...
    ButtonContainer: {
      elevation: 8,
      borderRadius: 5,
      paddingVertical: 15,
      paddingHorizontal: 12,
      marginVertical: 30
    },
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      // textTransform: "uppercase"
    }
  });


export default CustomButton;
