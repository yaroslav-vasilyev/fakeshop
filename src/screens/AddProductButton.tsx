import React from 'react';
import { Pressable, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type AddProductButtonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
};

const AddProductButton: React.FC<AddProductButtonProps> = ({ navigation }) => {
  return (
    <Pressable
      style={{
        borderRadius: 5,
        backgroundColor: '#3669C9',
        padding: 6,
      }}
      onPress={() => navigation.navigate('AddProduct')}
    >
      <Text style={{ color: 'white' }}>Додати продукт</Text>
    </Pressable>
  );
};

export default AddProductButton;
