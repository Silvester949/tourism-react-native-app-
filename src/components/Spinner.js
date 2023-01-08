import React from 'react';
import {Heading, HStack, Spinner as BaseSpinner} from 'native-base';

const Spinner = props => {
  return (
    <>
      <HStack alignSelf="center" marginTop="5">
        <BaseSpinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </>
  );
};

export default Spinner;
