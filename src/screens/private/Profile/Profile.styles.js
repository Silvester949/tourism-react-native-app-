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
      paddingTop: 20,
    },
    infoContainer: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
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
    containersTitle: {
      fontSize: 16,
      color: sky_blue_8,
      fontWeight: '500',
      marginLeft: 50,
    },
    imageInfoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 100,
      marginTop: 10,
    },
    imageInfoText: {
      fontSize: 16,
      color: gray_9,
      fontWeight: '400',
      marginTop: 10,
    },
    buttonText: {
      fontSize: 16,
      color: geekblue_6,
      fontWeight: '500',
    },
    infoTitle: {
      fontSize: 18,
      color: gray_9,
      fontWeight: '400',
    },
    infoTitleNoIcon: {
      fontSize: 18,
      color: gray_9,
      fontWeight: '400',
      marginLeft: 25,
    },
    infoDescriptionContainer: {
      marginLeft: 25,
    },
    infoDescription: {
      fontSize: 16,
      color: gray_8,
      fontWeight: '400',
    },
    socialButton: {
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
    cameraButton: {
      backgroundColor: gray_1,
      borderColor: geekblue_6,
      borderWidth: 1,
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      alignSelf: 'center',
      position: 'absolute',
      top: 7,
      right: 120,
    },
    bottomSheetContainer: {
      paddingHorizontal: 40,
      alignContent: 'center',
    },
    bottomSheetTitle: {
      fontSize: 13,
      color: gray_8,
      fontWeight: '400',
      textAlign: 'center',
      marginBottom: 20,
    },
    bottomSheetOptions: {
      fontSize: 18,
      color: geekblue_6,
      fontWeight: '500',
      textAlign: 'center',
    },
    bottomSheetButton: {
      paddingVertical: 5,
      backgroundColor: gray_1,
      borderRadius: 10,
      width: '100%',
      elevation: 3,
      borderColor: geekblue_6,
      borderWidth: 1,
    },
  });

export default makeStyles;
