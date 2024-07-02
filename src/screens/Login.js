import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getUserData, storeUserData } from '../utils/utils';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
      return;
    }

    const user = await getUserData(email);
    if (user && user.password === password) {
      await storeUserData('loggedInUser', user);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Products List');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={[styles.input, styles.text]}
        placeholder="Email"
        placeholderTextColor={'black'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.text]}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={'black'}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text}>Registration?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  text: {
    color: 'black',
  },
});

export default Login;
