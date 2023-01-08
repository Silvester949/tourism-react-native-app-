import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {useTheme} from 'native-base';
import {getModel} from 'react-native-device-info';
import CustomIcon from '../CustomIcon';
import logoBlack from '../../assets/images/Acta_Logo_Black.png';
import logoWhite from '../../assets/images/Acta_Logo_White.png';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import makeStyles from './BottomTabBar.styles';
import {gray_1, gray_10, gray_2, gray_8} from '../../styles/colors';

const iconMap = {
  Profile: 'user',
  Favorites: 'staro',
};

const BottomTabBar = props => {
  const {state, navigation} = props;

  const theme = useTheme();
  const styles = makeStyles(
    theme,
    getPaddingBasedOnModel,
    getHeightBasedOnModel,
  );

  const handlePress = route => {
    navigation.navigate(route.name);
  };

  return (
    <>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          return (
            <Pressable
              key={route.name}
              onPress={() => handlePress(route)}
              style={styles.tabButton}>
              {index !== 1 ? (
                <>
                  <Icon name={iconMap[route.name]} size={25} color={gray_8} />
                  <Text style={styles.text}>{route.name}</Text>
                </>
              ) : (
                <View style={styles.imageContainer}>
                  <Image style={styles.imageBtn} source={logoWhite} />
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </>
  );
};

const getPaddingBasedOnModel = () => {
  const model = getModel();
  if (Platform.OS === 'ios') {
    switch (model) {
      case 'iPhone 5':
        return 10;
      case 'iPhone 5C':
        return 10;
      case 'iPhone 5S':
        return 10;
      case 'iPhone 6':
        return 10;
      case 'iPhone 6 Plus':
        return 10;
      case 'iPhone 6S':
        return 10;
      case 'iPhone 6S Plus':
        return 10;
      case 'iPhone SE':
        return 10;
      case 'iPhone 7':
        return 10;
      case 'iPhone 7 Plus':
        return 10;
      case 'iPhone 8':
        return 10;
      case 'iPhone 8 Plus':
        return 10;
      default:
        return 40;
    }
  }
  return 10;
};

const getHeightBasedOnModel = () => {
  const model = getModel();
  if (Platform.OS === 'ios') {
    switch (model) {
      case 'iPhone 5':
        return 60;
      case 'iPhone 5C':
        return 60;
      case 'iPhone 5S':
        return 60;
      case 'iPhone 6':
        return 60;
      case 'iPhone 6 Plus':
        return 60;
      case 'iPhone 6S':
        return 60;
      case 'iPhone 6S Plus':
        return 60;
      case 'iPhone SE':
        return 60;
      case 'iPhone 7':
        return 60;
      case 'iPhone 7 Plus':
        return 60;
      case 'iPhone 8':
        return 60;
      case 'iPhone 8 Plus':
        return 60;
      default:
        return 95;
    }
  }
  return 60;
};

export {BottomTabBar};
