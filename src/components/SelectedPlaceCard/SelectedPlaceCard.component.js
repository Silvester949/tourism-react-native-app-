import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Image, useTheme} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import makeStyles from './SelectedPlaceCard.styles';

const SelectedPlaceCard = () => {
  const navigation = useNavigation();

  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SelectedPlace')}
      style={styles.selectedCard}
      rounded="xl">
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        style={styles.cardImage}
      />
      <View>
        <Text style={styles.cardTitle}>Restorant Joni</Text>
        <Text style={styles.cardInfo}>E hene - e premte / 09:00 - 18:00</Text>
        <Text style={styles.cardInfo}>187 visitors</Text>
      </View>
    </TouchableOpacity>
  );
};

export {SelectedPlaceCard};
