import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addNewProduct } from '../store/productActions';
import { Product, ProductsActions } from '../store/types';
import { RootStackParamList } from '../navigation/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const defaultProductPhoto = 'https://lh3.googleusercontent.com/proxy/rIUqw4tw9NQDFOvpLbgm3oXDeLNuqBwVsA0HgjW3TeuZqGRIbLZsysbgAjephKJ81mLWFZ4Vq_yQB5kFF3JGdvRYbhEB9NTNpZuy56_ncqO_USmdC-YF-SuCvLhvoNw';

type Props = NativeStackScreenProps<RootStackParamList, 'AddProduct'>;
type ProductWithoutImageAndId = Omit<Product, 'image' | 'id'>;

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Назва товару повинна бути не менше 3 символів')
    .required('Назва товару обов’язкова'),
  price: Yup.number()
    .min(1, 'Ціна повинна бути більше 0')
    .required('Ціна обов’язкова'),
  description: Yup.string()
    .min(5, 'Опис товару повинен бути не менше 5 символів')
    .required('Опис товару обов’язковий'),
});

const AddProductItemForm: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<Dispatch<ProductsActions>>();
  const [photo, setPhoto] = useState<string | null>(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setPhoto(uri || null);
      }
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setPhoto(uri || null);
      }
    });
  };

  const handleAddProductToList = (values: ProductWithoutImageAndId) => {
    const newProduct = ({
      id: Date.now().toString(),
      title: values.title,
      price: values.price,
      description: values.description,
      image: photo || defaultProductPhoto,
    });

    dispatch(addNewProduct(newProduct));
  };

  const handleFormSubmit = (
    values: ProductWithoutImageAndId,
    { resetForm }: FormikHelpers<ProductWithoutImageAndId>
  ) => {
    handleAddProductToList(values);
    resetForm();
    setPhoto(null);
    navigation.navigate('ProductList');
  };

  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{ title: '', price: '', description: '' }}
        validationSchema={ProductSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>

            {photo ? (
              <Image source={{ uri: photo }} style={styles.image} />
            ) : (
              <View style={styles.photoButtons}>
                <Button title="Вибрати фото" onPress={handleChoosePhoto} />
                <Button title="Зробити фото" onPress={handleTakePhoto} />
              </View>
            )}

            <View>
              <TextInput
                style={styles.input}
                placeholder="Назва товару"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {touched.title && errors.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Ціна товару"
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                keyboardType="numeric"
              />
              {touched.price && errors.price && (
                <Text style={styles.errorText}>{errors.price}</Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Опис товару"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline
              />
              {touched.description && errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}
            </View>

            <Button title="Додати товар" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  image: { width: 200, height: 200, alignSelf: 'center', resizeMode: 'contain' },
  photoButtons: { flexDirection: 'row', justifyContent: 'center', gap: 15, width: '100%' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default AddProductItemForm;
