import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'native-base';

import makeStyles from './AuthScreensHeader.styles';

const AuthScreensHeader = ({title, description}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export {AuthScreensHeader};
