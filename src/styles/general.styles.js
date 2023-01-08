import {StyleSheet} from 'react-native';
import {blue_5, gray_2, gray_4, gray_5, gray_9, red_4} from './colors';

const makeGeneralStyles = theme =>
  StyleSheet.create({
    authScreensContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    alignCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 40,
      height: 40,
    },
    link: {
      color: blue_5,
      textDecorationLine: 'underline',
    },
    termsText: {
      textAlign: 'center',
      fontSize: 15,
      marginTop: 15,
    },
    buttonContainer: {
      backgroundColor: gray_4,
      borderRadius: 50,
      width: 350,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50,
      paddingVertical: 12,
      paddingHorizontal: 15,
    },
    disabledButton: {
      backgroundColor: gray_2,
    },
    buttonText: {
      fontSize: 15,
      color: gray_9,
      fontWeight: '500',
      textAlign: 'center',
    },
    disabledButtonText: {
      color: gray_5,
    },
    inputErrorText: {
      marginTop: 5,
      color: red_4,
    },
    scrollContainer: {
      height: '100%',
      paddingTop: 20,
    },
    titleContainer: {
      marginTop: 35,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    pageTitle: {
      fontSize: 25,
      color: gray_9,
      fontWeight: '500',
      marginLeft: 20,
    },
  });

export default makeGeneralStyles;
