import {Platform, Dimensions} from 'react-native';

export const isIOS: boolean = Platform.OS === 'ios';
export const {height, width} = Dimensions.get('window');
