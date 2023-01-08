import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FormControl, Input, Stack, useTheme} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import logo from '../../../assets/images/Acta_Logo_Black.png';
import {Header} from '../../../components/Header/Header.component';
import {AuthScreensHeader} from '../../../components/AuthScreensHeader';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {geekblue_5, gray_5, gray_8} from '../../../styles/colors';

import makeStyles from './ForgotPassword.styles';
import makeGeneralStyles from '../../../styles/general.styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is a required field'),
});

const ForgotPassword = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <Header
        left={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={25} color={gray_8} />
          </TouchableOpacity>
        }
        center={<Image source={logo} style={generalStyles.logo} />}
      />
      <View style={generalStyles.authScreensContainer}>
        <View style={generalStyles.alignCenter}>
          <AuthScreensHeader
            title={'Enter your email address'}
            description="We will send you a link with the instruction"
          />
          <View>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => onSubmit(values)}>
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
                setFieldTouched,
              }) => (
                <>
                  <FormControl mt={10}>
                    <Stack space={5} w="100%">
                      <Stack w="100%">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                          w="100%"
                          size="lg"
                          variant="underlined"
                          p={2}
                          placeholder="Email"
                          value={values.email}
                          onChangeText={handleChange('email')}
                          onBlur={touched => setFieldTouched('email', touched)}
                        />
                        {errors.email && touched.email && (
                          <Text style={generalStyles.inputErrorText}>
                            <Icon name="exclamationcircleo" size={15} />{' '}
                            {errors.email}
                          </Text>
                        )}
                      </Stack>
                    </Stack>
                  </FormControl>
                  <TouchableOpacity
                    style={[
                      generalStyles.buttonContainer,
                      !isValid && generalStyles.disabledButton,
                    ]}
                    disabled={!isValid || Object.keys(errors).length > 0}
                    onPress={handleSubmit}>
                    <Icon
                      name="mail"
                      size={15}
                      color={!isValid ? gray_5 : geekblue_5}
                    />
                    <Text
                      style={[
                        generalStyles.buttonText,
                        !isValid && generalStyles.disabledButtonText,
                      ]}>
                      Send magic link
                    </Text>
                    <Icon
                      name="right"
                      size={15}
                      color={!isValid ? gray_5 : geekblue_5}
                    />
                  </TouchableOpacity>
                  <Text style={generalStyles.termsText}>
                    Already have an account?{' '}
                    <Text
                      onPress={() => navigation.navigate('Login')}
                      style={generalStyles.link}>
                      Login
                    </Text>
                    {'\n'}
                  </Text>
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </>
  );
};

export {ForgotPassword};
