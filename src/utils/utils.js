import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Failed to save user data to AsyncStorage', e);
  }
};

export const getUserData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to fetch user data from AsyncStorage', e);
  }
};

export const removeUserData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove user data from AsyncStorage', e);
  }
};
