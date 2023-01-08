import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Divider, useTheme} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import makeStyles from './Favorites.styles';
import makeGeneralStyles from '../../../styles/general.styles';
import {gray_9} from '../../../styles/colors';
import {FavoritePlaceCard} from '../../../components/FavoritePlaceCard/FavoritePlaceCard.component';

const Favorites = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);

  const favoritesPlaces = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
  ];

  const showFavoriteplaces = () => {
    return favoritesPlaces.map(place => {
      return <FavoritePlaceCard key={place.id} />;
    });
  };

  return (
    <View style={styles.container}>
      <View style={generalStyles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntIcon name="arrowleft" size={30} color={gray_9} />
        </TouchableOpacity>
        <Text style={generalStyles.pageTitle}>Favorites</Text>
      </View>

      <Divider thickness="1" mt="4" />

      <ScrollView style={generalStyles.scrollContainer}>
        <View style={{paddingBottom: 150, paddingHorizontal: 40}}>
          {showFavoriteplaces()}
        </View>
      </ScrollView>
    </View>
  );
};

export {Favorites};
