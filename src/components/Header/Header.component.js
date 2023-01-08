import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'native-base';

import makeStyles from './Header.styles';

const Header = ({left, center, right}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>{left}</View>
      <View style={[styles.flex, styles.center]}>{center}</View>
      <View style={styles.flex}>{right}</View>
    </View>
  );
};

export {Header};
