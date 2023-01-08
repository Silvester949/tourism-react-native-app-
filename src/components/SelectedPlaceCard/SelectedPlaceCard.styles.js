import {StyleSheet} from 'react-native';
import {gray_1, gray_10, gray_7} from '../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    selectedCard: {
      bottom: 140,
      width: '90%',
      alignSelf: 'center',
      backgroundColor: gray_1,
      borderRadius: 10,
      height: 75,
      display: 'flex',
      flexDirection: 'row',
    },
    cardImage: {
      width: 85,
      height: 75,
      marginLeft: 0,
      marginRight: 20,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    cardInfo: {
      fontSize: 12,
      color: gray_7,
      fontWeight: '500',
    },
    cardTitle: {
      fontSize: 15,
      color: gray_10,
      fontWeight: '700',
      marginBottom: 3,
      marginTop: 5,
    },
  });

export default makeStyles;
