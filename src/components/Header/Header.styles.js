import {StyleSheet} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 45,
      paddingHorizontal: 16,
    },
    flex: {
      flex: 1,
    },
    center: {
      alignItems: 'center',
    },
  });

export default makeStyles;
