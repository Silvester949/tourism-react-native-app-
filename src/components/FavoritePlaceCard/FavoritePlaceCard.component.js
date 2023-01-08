import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useTheme} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import makeStyles from './FavoritePlaceCard.styles';
import {volcano_7} from '../../styles/colors';

const FavoritePlaceCard = () => {
  const navigation = useNavigation();

  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        imageStyle={styles.cardImage}>
        <View style={styles.cardContentContainer}>
          <TouchableOpacity>
            <AntIcon name="star" size={25} color={volcano_7} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectedPlace')}>
            <Text style={styles.cardText}>Restorant Joni</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export {FavoritePlaceCard};
