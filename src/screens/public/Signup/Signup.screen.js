import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FormControl, Input, Stack, useTheme} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import logo from '../../../assets/images/Acta_Logo_Black.png';
import {Header} from '../../../components/Header/Header.component';
import {AuthScreensHeader} from '../../../components/AuthScreensHeader';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {geekblue_5, gray_5, gray_8, gray_9} from '../../../styles/colors';

import makeStyles from './Signup.styles';
import makeGeneralStyles from '../../../styles/general.styles';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is a required field'),
  lastname: Yup.string().required('Last name is a required field'),
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is a required field'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const Signup = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
          <AuthScreensHeader title={'Sign up'} />
          <View>
            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
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
                        <FormControl.Label>First name</FormControl.Label>
                        <Input
                          w="100%"
                          size="lg"
                          variant="underlined"
                          p={2}
                          placeholder="First name"
                          value={values.firstname}
                          onChangeText={handleChange('firstname')}
                          onBlur={touched =>
                            setFieldTouched('firstname', touched)
                          }
                        />
                        {errors.firstname && touched.firstname && (
                          <Text style={generalStyles.inputErrorText}>
                            <Icon name="exclamationcircleo" size={15} />{' '}
                            {errors.firstname}
                          </Text>
                        )}
                      </Stack>
                      <Stack w="100%">
                        <FormControl.Label>Last name</FormControl.Label>
                        <Input
                          w="100%"
                          size="lg"
                          variant="underlined"
                          p={2}
                          placeholder="Last name"
                          value={values.lastname}
                          onChangeText={handleChange('lastname')}
                          onBlur={touched =>
                            setFieldTouched('lastname', touched)
                          }
                        />
                        {errors.lastname && touched.lastname && (
                          <Text style={generalStyles.inputErrorText}>
                            <Icon name="exclamationcircleo" size={15} />{' '}
                            {errors.lastname}
                          </Text>
                        )}
                      </Stack>
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
                      <Stack>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                          variant="underlined"
                          p={2}
                          value={values.password}
                          onBlur={touched =>
                            setFieldTouched('password', touched)
                          }
                          onChangeText={handleChange('password')}
                          size="lg"
                          placeholder="Password"
                          type={show ? 'text' : 'password'}
                          InputRightElement={
                            <EntypoIcon
                              name={show ? 'eye-with-line' : 'eye'}
                              size={25}
                              mr="2"
                              color={gray_9}
                              onPress={() => setShow(!show)}
                            />
                          }
                        />
                        {errors.password && touched.password && (
                          <Text style={generalStyles.inputErrorText}>
                            <Icon name="exclamationcircleo" size={15} />{' '}
                            {errors.password}
                          </Text>
                        )}
                      </Stack>
                      <Stack>
                        <FormControl.Label>Confirm password</FormControl.Label>
                        <Input
                          variant="underlined"
                          p={2}
                          value={values.confirmPassword}
                          onBlur={touched =>
                            setFieldTouched('confirmPassword', touched)
                          }
                          onChangeText={handleChange('confirmPassword')}
                          size="lg"
                          placeholder="Confirm password"
                          type={showConfirm ? 'text' : 'password'}
                          InputRightElement={
                            <EntypoIcon
                              name={showConfirm ? 'eye-with-line' : 'eye'}
                              size={25}
                              mr="2"
                              color={gray_9}
                              onPress={() => setShowConfirm(!showConfirm)}
                            />
                          }
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <Text style={generalStyles.inputErrorText}>
                            <Icon name="exclamationcircleo" size={15} />{' '}
                            {errors.confirmPassword}
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
                      name="adduser"
                      size={15}
                      color={!isValid ? gray_5 : geekblue_5}
                    />
                    <Text
                      style={[
                        generalStyles.buttonText,
                        !isValid && generalStyles.disabledButtonText,
                      ]}>
                      Sign up
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

export {Signup};
