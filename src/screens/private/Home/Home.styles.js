import {StyleSheet} from 'react-native';
import {gray_1, gray_10, gray_5, gray_7, gray_8, sky_blue_8} from '../../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    mapStyle: {
      width: '100%',
      height: '100%',
    },
    headerButton: {
      backgroundColor: gray_1,
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      position: 'absolute',
      top: 60,
    },
    searchButton: {
      left: 24,
    },
    filterButton: {
      right: 24,
    },
    modalButton: {
      backgroundColor: sky_blue_8,
      borderRadius: 50,
      width: 350,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      paddingVertical: 12,
      paddingHorizontal: 15,
      position: 'absolute',
      bottom: 40,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: gray_1,
      fontWeight: '500',
      textAlign: 'center',
    },
    selectedCard: {
      bottom: 140,
      width: '85%',
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
    searchInput: {
      backgroundColor: gray_1,
      height: 50,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.5,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderColor: gray_5
    },
    inputCloseButton: {
      padding: 5,
    },
  });

export default makeStyles;
