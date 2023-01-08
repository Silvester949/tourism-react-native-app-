import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Divider,
  ScrollView,
  useTheme,
  FormControl,
  Input,
  Stack,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import makeStyles from './ProfileInfo.styles';
import {gray_9} from '../../../styles/colors';
import {Formik} from 'formik';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import makeGeneralStyles from '../../../styles/general.styles';

const Profileinfo = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} color={gray_9} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Profile Info</Text>
      </View>

      <Divider thickness="1" my="4" />

      <ScrollView style={styles.scrollContainer}>
        <View style={{paddingBottom: 200}}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              oldPassword: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => onSubmit(values)}>
            {({
              handleChange,
              handleSubmit,
              values,
              isValid,
              touched,
              setFieldTouched,
            }) => (
              <>
                <FormControl mt={5}>
                  <Stack space={10} w="100%">
                    <Stack w="100%">
                      <FormControl.Label>First Name</FormControl.Label>
                      <Input
                        w="100%"
                        size="lg"
                        variant="underlined"
                        p={2}
                        placeholder="Silvester"
                        value={values.firstName}
                        onChangeText={handleChange('firstName')}
                        onBlur={touched =>
                          setFieldTouched('firstName', touched)
                        }
                      />
                    </Stack>
                    <Stack w="100%">
                      <FormControl.Label>Last Name</FormControl.Label>
                      <Input
                        w="100%"
                        size="lg"
                        variant="underlined"
                        p={2}
                        placeholder="Cekodhima"
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        onBlur={touched => setFieldTouched('lastName', touched)}
                      />
                    </Stack>
                    <Stack w="100%">
                      <FormControl.Label>Email</FormControl.Label>
                      <Input
                        w="100%"
                        size="lg"
                        variant="underlined"
                        p={2}
                        placeholder="Email"
                        value={'silvestercekodhima@gmail.com'}
                        isDisabled
                      />
                    </Stack>
                    <TouchableOpacity
                      style={styles.passwordButton}
                      onPress={() =>
                        setChangePasswordVisible(!changePasswordVisible)
                      }>
                      <Text style={styles.buttonText}>Change password</Text>
                    </TouchableOpacity>
                    {changePasswordVisible && (
                      <Animated.View
                        entering={FadeIn}
                        exiting={FadeOut.duration(100)}>
                        <Stack>
                          <Stack w="100%">
                            <FormControl.Label>Old Password</FormControl.Label>
                            <Input
                              variant="underlined"
                              p={2}
                              value={values.oldPassword}
                              onBlur={touched =>
                                setFieldTouched('oldPassword', touched)
                              }
                              onChangeText={handleChange('oldPassword')}
                              size="lg"
                            />
                          </Stack>
                          <Stack w="100%">
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
                            />
                          </Stack>
                          <Stack>
                            <FormControl.Label>
                              Confirm Password
                            </FormControl.Label>
                            <Input
                              variant="underlined"
                              p={2}
                              value={values.confirmPassword}
                              onBlur={touched =>
                                setFieldTouched('confirmPassword', touched)
                              }
                              onChangeText={handleChange('confirmPassword')}
                              size="lg"
                            />
                          </Stack>
                        </Stack>
                      </Animated.View>
                    )}

                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={() => console.log('save')}>
                      <Text style={styles.buttonText}>Save profile Info</Text>
                    </TouchableOpacity>
                  </Stack>
                </FormControl>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export {Profileinfo};
