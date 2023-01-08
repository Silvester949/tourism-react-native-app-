import React from 'react';
import {Box, Heading, HStack, ScrollView, Text, VStack} from 'native-base';

import Header from '../../components/Header';
import {useGetUsersQuery} from '../../services/users';

const ProfileScreen = ({route}) => {
  const {userId} = route.params;

  const {user} = useGetUsersQuery(undefined, {
    selectFromResult: ({data}) => {
      return {
        user: data?.find(item => item.id === userId),
      };
    },
  });

  return (
    <>
      <Header title="User Profile" hasBackBtn />
      <ScrollView>
        <Box safeAreaBottom>
          <VStack
            w="full"
            marginTop="5"
            alignItems="center"
            justifyContent="center">
            <Heading>{user?.name}</Heading>
            <Text>{user?.company?.name}</Text>
          </VStack>
          <VStack marginTop="5" paddingX="5">
            <Heading size="md" alignSelf="center" marginBottom="3">
              Contact Information
            </Heading>
            <Text marginBottom="2">{user?.email}</Text>
            <Text>{user?.address?.street}</Text>
            <Text>{user?.address?.suite}</Text>
            <Text>
              {user?.address?.city} {user?.address?.zipcode}
            </Text>
            <Text>{user?.phone}</Text>
          </VStack>
          <VStack marginTop="5" paddingX="5">
            <Heading size="md" alignSelf="center" marginBottom="3">
              Other Information
            </Heading>
            <HStack>
              <Text>User Name: {user?.username}</Text>
            </HStack>
            <HStack>
              <Text>Website: {user?.website}</Text>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
