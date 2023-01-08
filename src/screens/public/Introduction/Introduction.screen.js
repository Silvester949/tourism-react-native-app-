import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'native-base';
import logo from '../../../assets/images/Acta_Logo_Black.png';

import makeStyles from './Introduction.styles';

const Introduction = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>ACTA</Text>
        <Text style={styles.introText}>Your Albanian Guide</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Introduction};
