import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/CartSlice';
// import { addToCart } from '../store/slices/cartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
    console.log(props)
  return (
    <View style={styles.container}>
      <Text style={{color : 'black'}}>{props.product.title}</Text>
      <Text  style={{color : 'black'}}>${props.product.price}</Text>
      {/* <Image src={uri} ></Image> */}
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    flex:1,
    height:200
  },
});

export default ProductItem;
