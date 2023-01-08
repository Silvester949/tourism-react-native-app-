import {StyleSheet} from 'react-native';
import {
  geekblue_6,
  gray_1,
  gray_8,
  gray_9,
  sky_blue_8,
} from '../../../styles/colors';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: gray_1,
    },
    scrollContainer: {
      height: '100%',
      paddingHorizontal: 30,
    },
    titleContainer: {
      marginTop: 50,
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
    saveButton: {
      backgroundColor: gray_1,
      borderRadius: 10,
      width: 200,
      paddingVertical: 7,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderColor: geekblue_6,
      borderWidth: 1,
    },
    passwordButton: {
      alignItems: 'flex-end',
    },
    buttonText: {
      fontSize: 16,
      color: geekblue_6,
      fontWeight: '500',
    },
  });

export default makeStyles;
