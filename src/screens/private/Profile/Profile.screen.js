import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider, Image, ScrollView, useTheme} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {profileOptions, supportOptions} from './profileConst';
import {PermissionsAndroid} from 'react-native';

import makeStyles from './Profile.styles';
import {geekblue_6, gray_9} from '../../../styles/colors';
import makeGeneralStyles from '../../../styles/general.styles';

const Profile = ({navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const generalStyles = makeGeneralStyles(theme);

  const bottomSheetRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState();

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLibraryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the library');
      } else {
        console.log('library permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setSelectedImage(image);
        bottomSheetRef.current.close();
      })
      .catch(error => console.log(error, 'error'));
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      useFrontCamera: true,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setSelectedImage(image);
        bottomSheetRef.current.close();
      })
      .catch(error => console.log(error, 'error'));
  };

  const uploadButtons = [
    {
      title: 'Take a photo',
      onPress: openCamera,
    },
    {
      title: 'Choose from library',
      onPress: openLibrary,
    },
  ];

  const showSupportOptions = optionsList => {
    return optionsList.map(item => {
      return (
        <View key={item.title} style={styles.infoContainer}>
          {item.icon && <FontIcon name={item.icon} size={23} color={gray_9} />}
          <View style={styles.infoDescriptionContainer}>
            <TouchableOpacity>
              <Text
                style={item.icon ? styles.infoTitle : styles.infoTitleNoIcon}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  const showUploadButtons = () => {
    return uploadButtons.map((item, index) => {
      return (
        <View key={item.title}>
          <TouchableOpacity
            style={styles.bottomSheetButton}
            onPress={item.onPress}>
            <Text style={styles.bottomSheetOptions}>{item.title}</Text>
          </TouchableOpacity>
          {index === 0 && <Divider thickness="1" my={3} />}
        </View>
      );
    });
  };

  useEffect(() => {
    requestCameraPermission();
    requestLibraryPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={generalStyles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntIcon name="arrowleft" size={30} color={gray_9} />
        </TouchableOpacity>
        <Text style={generalStyles.pageTitle}>Profile</Text>
      </View>

      <Divider thickness="1" mt="4" />

      <ScrollView style={generalStyles.scrollContainer}>
        <View style={{paddingBottom: 200}}>
          <View style={styles.imageInfoContainer}>
            <Image
              source={{
                uri: !selectedImage
                  ? 'https://wallpaperaccess.com/full/317501.jpg'
                  : selectedImage.path,
              }}
              alt="Alternate Text"
              style={styles.profileImage}
            />
            <Text style={styles.imageInfoText}>Silvester Cekodhima</Text>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={() => bottomSheetRef.current.open()}>
              <FontIcon name="camera" size={23} color={geekblue_6} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => navigation.navigate('ProfileInfo')}>
            <Text style={styles.buttonText}>Change profile Info</Text>
          </TouchableOpacity>

          <Divider thickness="1" mt="10" mb="3" />
          {showSupportOptions(supportOptions)}
          <Divider thickness="1" mt="7" mb="3" />
          {showSupportOptions(profileOptions)}
        </View>
      </ScrollView>
      <RBSheet
        ref={bottomSheetRef}
        height={200}
        minClosingHeight={50}
        openDuration={250}
        closeOnPressMask
        closeOnPressBack
        closeOnDragDown
        animationType={'slide'}
        transparent={false}
        dragFromTopOnly>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>Select profile picture</Text>
          {showUploadButtons()}
          <TouchableOpacity></TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export {Profile};
