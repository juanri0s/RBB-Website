import { Divider, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';

const Content = ({ heading, message, margin }) => {
  return (
    <Flex
      direction={['column', 'column', 'row', 'row', 'row']}
      marginTop={margin}
    >
      <Heading
        lineHeight="1"
        verticalAlign="top"
        textAlign={['center', 'center', 'center', 'right']}
        minW="285px"
        paddingRight="22px"
      >
        {heading}
      </Heading>
      <Divider
        marginLeft={['98px', '128px', '25px', '25px']}
        marginRight={['97px', '97px', '25px', '25px']}
        marginTop={['25px', '25px', '0']}
        marginBottom={['25px', '25px', '0']}
        border="1px solid"
        borderColor="#BA2A2A"
        orientation="vertical"
      />
      <Text
        style={{ whiteSpace: 'pre-wrap' }}
        textAlign={['center', 'center', 'center', 'left']}
        marginLeft={['17px', '17px', '0']}
        marginRight={['16px', '16px', '0']}
        paddingLeft="25px"
      >
        {message}
      </Text>
    </Flex>
  );
};

export default Content;