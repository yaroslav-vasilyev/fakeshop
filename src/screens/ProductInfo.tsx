import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import {RootStackParamList} from '../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductInfo'>;

const ProductInfo: React.FC<Props> = ({route}) => {
  const {product} = route.params;
  const {title, price, image, description} = product;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: image}} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price} UAH</Text>
        <View style={{ height: 1, width: '100%', backgroundColor: '#EDEDED', marginBottom: 15 }} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E74C3C',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
});

export default ProductInfo;
