import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
// import ProductItem from '../components/ProductItem';
import { removeUserData } from '../utils/utils';
import ProductItem from '../components/ProductItem';


const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts =  () => {
    // Replace this with your API call
    const response =  require('../utils/data.json')
    // const data = await response.json();
    console.log(response)
    setProducts((prevProducts) => [...prevProducts, ...response.products]);
  };

  const handleLogout = async () => {
    await removeUserData('loggedInUser');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductsList;
