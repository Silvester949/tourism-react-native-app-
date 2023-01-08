import {StyleSheet} from 'react-native';
import {geekblue_5, gray_1, gray_9} from '../../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      alignItems: 'center',
      top: -70,
    },
    logo: {
      width: 120,
      height: 120,
    },
    logoText: {
      fontSize: 90,
      fontWeight: '800',
      color: gray_9,
    },
    introText: {
      fontSize: 20,
      fontWeight: '500',
      color: gray_9,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      backgroundColor: geekblue_5,
      paddingHorizontal: 75,
      paddingVertical: 15,
      borderRadius: 50,
    },
    buttonText: {
      fontSize: 15,
      color: gray_1,
    },
  });

export default makeStyles;
