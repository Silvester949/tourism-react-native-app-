import {StyleSheet} from 'react-native';
import {gray_1} from '../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    cardContainer: {
      marginVertical: 12,
    },
    cardImage: {
      borderRadius: 15,
      resizeMode: 'stretch',
    },
    cardContentContainer: {
      height: 150,
      paddingHorizontal: 15,
      paddingVertical: 13,
      justifyContent: 'space-between',
    },
    cardText: {
      color: gray_1,
      fontSize: 22,
      fontWeight: '700',
    },
  });

export default makeStyles;
