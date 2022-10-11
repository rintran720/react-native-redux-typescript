import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN_STORAGE_KEY } from '../constants/config.const';

export async function getAccessToken() {
  try {
    return await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}
