import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, Image, useTheme} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import makeStyles from './SelectedPlace.styles';
import {geekblue_5, gray_8, gray_9} from '../../../styles/colors';

const SelectedPlace = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={25} color={gray_8} />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.openHours}>
              E hene - e premte / 09:00 - 18:00
            </Text>
            <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              gravida lacus, tincidunt scelerisque lectus. Maecenas
              pellentesque, neque vel mollis dignissim, ante purus feugiat nisl,
              vitae lacinia ex sem sed dolor. tincidunt scelerisque lectus.
              Maecenas pellentesque, neque vel mollis dignissim, ante purus
              feugiat nisl, vitae lacinia ex sem sed dolor.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <View>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="sharealt" size={25} color={geekblue_5} />
              </TouchableOpacity>
              <Text style={styles.shareText}>Share</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="staro" size={25} color={geekblue_5} />
              </TouchableOpacity>
              <Text style={styles.shareText}>Favorite</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title}>Details</Text>
            <Divider thickness="1" my="4" />
            <View style={styles.detailsContainers}>
              <Icon name="calendar" size={25} color={gray_9} />
              <Text style={styles.detailsText}>
                E hene - e premte / 09:00 - 18:00
              </Text>
            </View>
            <Divider thickness="1" my="4" />
            <View style={styles.detailsContainers}>
              <Icon name="enviromento" size={25} color={gray_9} />
              <Text style={styles.detailsText}>Lorem ipsum dolor sit amet</Text>
            </View>
            <Divider thickness="1" my="4" />
            <View style={styles.detailsContainers}>
              <Icon name="user" size={25} color={gray_9} />
              <Text style={styles.detailsText}>Lorem ipsum dolor sit amet</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title}>Visited</Text>
            <View style={styles.visitorsContainer}>
              <Text style={styles.visitorsNumber}>457</Text>
              <Text style={styles.visitorsResponded}>Visitors</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.modalButton}>
          <Text style={styles.buttonText}>VISIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export {SelectedPlace};
