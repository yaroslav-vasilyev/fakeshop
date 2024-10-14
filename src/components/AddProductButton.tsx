import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type AddProductButtonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
};

const AddProductButton: React.FC<AddProductButtonProps> = ({ navigation }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('AddProduct')}
    >
      <Text style={styles.buttonText}>Додати продукт</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: '#3669C9',
    padding: 6,
  },
  buttonText: {
    color: 'white',
  },
});

export default AddProductButton;
