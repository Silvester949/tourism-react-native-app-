import React from 'react';
import {useGetUsersQuery} from '../../services/users';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';

const UsersScreen = ({navigation}) => {
  const {data, error, isLoading} = useGetUsersQuery();

  const renderData = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <FlatList
          data={data}
          marginBottom="5"
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ProfileScreen', {userId: item.id})
              }>
              {({isHovered, isPressed}) => {
                return (
                  <Box
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: 'gray.600',
                    }}
                    borderColor="coolGray.200"
                    bg={
                      isPressed
                        ? 'coolGray.200'
                        : isHovered
                        ? 'coolGray.200'
                        : 'coolGray.100'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    pl="4"
                    pr="5"
                    py="2">
                    <HStack space={3} justifyContent="space-between">
                      <Avatar
                        size="48px"
                        source={{
                          uri: 'https://picsum.photos/200',
                        }}
                      />
                      <VStack>
                        <Text
                          _dark={{
                            color: 'warmGray.50',
                          }}
                          color="coolGray.800"
                          bold>
                          {item.name}
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: 'warmGray.200',
                          }}>
                          {item.email}
                        </Text>
                      </VStack>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        alignSelf="flex-start">
                        {item.timeStamp}
                      </Text>
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      );
    } else if (error) {
      return (
        <HStack alignSelf="center" marginTop="5">
          <Text>{error?.status}</Text>
        </HStack>
      );
    } else {
      return (
        <HStack alignSelf="center" marginTop="5">
          <Text>No data</Text>
        </HStack>
      );
    }
  };

  return (
    <>
      <Header title="User List" />
      {isLoading ? (
        <Box h="full">
          <Spinner />
        </Box>
      ) : (
        renderData()
      )}
    </>
  );
};

export default UsersScreen;
