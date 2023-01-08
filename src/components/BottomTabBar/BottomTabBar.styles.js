import {StyleSheet} from 'react-native';
import {geekblue_5, gray_1, gray_5, gray_9} from '../../styles/colors';

const makeStyles = (theme, getPaddingBasedOnModel, getHeightBasedOnModel) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    tabBarContainer: {
      paddingBottom: getPaddingBasedOnModel(),
      flexDirection: 'row',
      backgroundColor: gray_1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      borderTopColor: gray_5,
      borderTopWidth: 1,
      height: getHeightBasedOnModel(),
    },
    tabButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    text: {
      color: gray_9,
      fontSize: 12,
      lineHeight: 12,
      // fontFamily: 'SFProText-Light',
      marginTop: 5,
    },
    imageContainer: {
      width: 60,
      height: 60,
      backgroundColor: geekblue_5,
      padding: 5,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      top: -10,
    },
    imageBtn: {
      width: 32,
      height: 32,
      top: -2,
    },
  });

export default makeStyles;
