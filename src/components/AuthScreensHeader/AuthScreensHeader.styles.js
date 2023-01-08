import {StyleSheet} from 'react-native';
import {gray_7, gray_9} from '../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
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
  });

export default makeStyles;
