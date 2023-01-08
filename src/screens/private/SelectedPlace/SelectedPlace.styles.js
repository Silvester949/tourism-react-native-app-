import {StyleSheet} from 'react-native';
import {
  gray_1,
  gray_10,
  gray_4,
  gray_8,
  gray_9,
  sky_blue_8,
} from '../../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      paddingBottom: 370,
    },
    infoContainer: {
      paddingHorizontal: 24,
      marginTop: 20,
    },
    image: {
      width: '100%',
      height: '25%',
      resizeMode: 'cover',
      zIndex: 0,
    },
    backButton: {
      backgroundColor: gray_1,
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      position: 'absolute',
      top: 50,
      left: 14,
      zIndex: 1,
    },
    openHours: {
      color: gray_8,
      fontSize: 17,
      marginBottom: 15,
      fontWeight: '400',
    },
    title: {
      fontSize: 22,
      color: gray_10,
      fontWeight: '700',
    },
    description: {
      fontSize: 17,
      color: gray_8,
      fontWeight: '500',
      marginTop: 5,
    },
    socialButton: {
      backgroundColor: gray_4,
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      alignSelf: 'center',
      marginTop: 40,
    },
    shareText: {
      fontSize: 14,
      color: gray_8,
      fontWeight: '500',
      textAlign: 'center',
      marginTop: 10,
    },
    separator: {
      height: 10,
      backgroundColor: gray_4,
      width: '100%',
      marginVertical: 30,
    },
    detailsContainers: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    detailsText: {
      fontSize: 14,
      color: gray_9,
      fontWeight: '500',
      marginLeft: 20,
    },
    bottom: 300,
    visitorsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: 300,
    visitorsNumber: {
      fontSize: 25,
      color: gray_10,
      fontWeight: '600',
      marginTop: 30,
    },
    bottom: 300,
    visitorsResponded: {
      fontSize: 18,
      color: gray_10,
      fontWeight: '500',
      marginTop: 5,
    },
    modalButton: {
      backgroundColor: sky_blue_8,
      borderRadius: 50,
      width: 350,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 15,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 20,
      color: gray_1,
      fontWeight: '500',
      textAlign: 'center',
    },
    buttonsContainer: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
  });

export default makeStyles;
