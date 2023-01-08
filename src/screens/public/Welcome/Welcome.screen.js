import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, HStack, useTheme} from 'native-base';
import logo from '../../../assets/images/Acta_Logo_Black.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {geekblue_5} from '../../../styles/colors';
import {Header} from '../../../components/Header/Header.component';

import makeStyles from './Welcome.styles';
import makeGeneralStyles from '../../../styles/general.styles';
import {AuthScreensHeader} from '../../../components/AuthScreensHeader';

const Welcome = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);

  return (
    <>
      <Header center={<Image source={logo} style={generalStyles.logo} />} />
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <AuthScreensHeader
            title={'Welcome'}
            description="One more step before you can start exploring Albania."
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.icon}>@</Text>
            <Text style={styles.buttonText}>Sign in with Email</Text>
            <Icon name="right" size={15} color={geekblue_5} />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            ACTA has a{' '}
            <Text onPress={() => console.log('pressed')} style={styles.link}>
              privacy statement
            </Text>{' '}
            and{' '}
            <Text onPress={() => console.log('pressed')} style={styles.link}>
              terms and conditions
            </Text>
            . {'\n'}By registering you agree with the terms.
          </Text>
        </View>
      </View>
    </>
  );
};

export {Welcome};
