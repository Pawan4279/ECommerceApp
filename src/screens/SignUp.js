import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { storeUserData } from '../utils/utils';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignup = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Name is required.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
      return;
    }
    let details = {
        name : name,
        email : email,
        password : password
    }
    storeUserData(email,details)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <TextInput
        style={[styles.input,styles.text]}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"black"}
      />
      <TextInput
        style={[styles.input,styles.text]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={"black"}
      />
      <TextInput
        style={[styles.input,styles.text]}
        placeholder="Password"
        secureTextEntry
        value={password}
        placeholderTextColor={"black"}
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
      {/* <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  text : {
    color : "black"
  }
});

export default Signup;
