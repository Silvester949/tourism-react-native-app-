import {StyleSheet} from 'react-native';
import {
  blue_3,
  blue_4,
  blue_5,
  blue_6,
  geekblue_5,
  gray_3,
  gray_4,
  gray_5,
  gray_7,
  gray_9,
  sky_blue_3,
} from '../../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    logo: {
      width: 40,
      height: 40,
    },
    welcomeContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
      color: gray_9,
    },
    description: {
      textAlign: 'center',
      fontSize: 15,
      color: gray_7,
      paddingHorizontal: 70,
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
    buttonText: {
      fontSize: 15,
      color: gray_9,
      fontWeight: '500',
      textAlign: 'center',
    },
    icon: {
      fontSize: 23,
      color: geekblue_5,
      fontWeight: '700',
    },
    termsText: {
      fontSize: 12,
      marginTop: 15,
    },
    link: {
      color: blue_5,
      textDecorationLine: 'underline',
    },
  });

export default makeStyles;
