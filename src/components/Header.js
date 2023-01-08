import React from 'react';
import PropTypes from 'prop-types';
import {Entypo} from '@native-base/icons';
import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Icon, IconButton, StatusBar, Text} from 'native-base';

const Header = ({title, hasBackBtn}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="4" py="3" alignItems="center" w="100%">
        <HStack alignItems="center">
          {hasBackBtn && (
            <IconButton
              icon={
                <Icon
                  as={Entypo}
                  name="back"
                  onPress={() => navigation.goBack()}
                />
              }
            />
          )}
          <Text color="white" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
