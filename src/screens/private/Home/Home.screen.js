import React, {useEffect, useState, useCallback} from 'react';
import {Text, TouchableOpacity, View, Modal, SafeAreaView} from 'react-native';
import _ from 'lodash';
import {Input, useTheme} from 'native-base';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {MAP_STYLE} from './const';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated';
import {SelectedPlaceCard} from '../../../components/SelectedPlaceCard/SelectedPlaceCard.component';

import makeStyles from './Home.styles';
import {gray_8} from '../../../styles/colors';
import { FlatList } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title, id, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10, alignItems: 'center', borderBottomWidth: 0.2, borderBottomColor: gray_8, paddingVertical: 10}}>
      <Icon name="enviromento" size={20} color={gray_8} />
      <Text style={{flex: 1, fontSize: 16, marginLeft: 10}}>{title}</Text>
      <FeatherIcon name="arrow-up-left" size={20} color={gray_8} />
    </View>
  </TouchableOpacity>
);


const Home = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [isSelected, setIsSelected] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [data, setData] = useState(DATA);

  const [region, setRegion] = useState({
    latitude: 41.327953,
    longitude: 19.819025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [marker, setMarker] = useState({
    latitude: 41.327953,
    longitude: 19.819025,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getCoords = () => {
    Geolocation.getCurrentPosition(info => {
      let data = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      };
      setRegion(data);
    });
  };

  const getData =(value) => {
    console.log("🚀 ~ file: Home.screen.js ~ line 79 ~ getData ~ value", value)
    const filteredData = DATA.filter(item => !item.title.search(value))
    setData(filteredData)
  }

  const onInputSearch = useCallback(_.debounce(getData, 600), []);

  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} onPress={() => {setRegion(item.coordinates); setIsSearchOpen(false);}}/>
  );

  useEffect(() => {
    getCoords();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <MapView
          onPress={e => {
            setMarker(e.nativeEvent.coordinate);
            setIsSelected(false);
          }}
          showsCompass={false}
          style={styles.mapStyle}
          customMapStyle={MAP_STYLE}
          initialRegion={region}
          minZoomLevel={8.5}
          maxZoomLevel={20}>
          <Marker
            coordinate={marker}
            onPress={event => {
              event.preventDefault();
              setIsSelected(!isSelected);
            }}
          />
        </MapView>

        {/* {isSearchOpen ? (
          <Animated.View
            style={styles.searchInput}
            entering={SlideInLeft.duration(100)}
            exiting={SlideOutLeft}>
            <TouchableOpacity >
              <Icon name="search1" size={25} color={gray_8} />
            </TouchableOpacity>
            <Input
              w="100%"
              size="md"
              variant="unstyled"
              p={2}
              placeholder="Search.."
              value={''}
            />
            <TouchableOpacity
              style={styles.inputCloseButton}
              onPress={() => setIsSearchOpen(false)}>
              <Icon name="close" size={25} color={gray_8} />
            </TouchableOpacity>
          </Animated.View>
        ) : ( */}
          <TouchableOpacity
            style={[styles.headerButton, styles.searchButton]}
            onPress={() => setIsSearchOpen(true)}>
            <Icon name="search1" size={25} color={gray_8} />
          </TouchableOpacity>
        {/* )} */}
        <TouchableOpacity style={[styles.headerButton, styles.filterButton]}>
          <Icon name="filter" size={25} color={gray_8} />
        </TouchableOpacity>
      </View>
      {isSelected ? (
        <SelectedPlaceCard />
      ) : (
        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.buttonText}>What would you like to visit?</Text>
        </TouchableOpacity>
      )}
     { isSearchOpen && <Modal visible={isSearchOpen}>
        <SafeAreaView>

        <Animated.View
          style={styles.searchInput}
          entering={SlideInLeft.duration(200)}
          exiting={SlideOutLeft}>
          <TouchableOpacity  onPress={() => {setIsSearchOpen(false); setSearchValue(''); setData(DATA)}}>
            <Icon name="left" size={25} color={gray_8} />
          </TouchableOpacity>
          <Input
            w="80%"
            size="md"
            variant="unstyled"
            p={2}
            placeholder="Search.."
            value={searchValue}
            onChangeText={(value) => {
              setSearchValue(value);
              onInputSearch(value);
            }}
          />
          <TouchableOpacity
            style={styles.inputCloseButton}
            onPress={() => {setSearchValue(''); setData(DATA);}}>
            <Icon name="close" size={25} color={gray_8} />
          </TouchableOpacity>
        </Animated.View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        </SafeAreaView>
      </Modal>}
    </View>
  );
};

export {Home};
