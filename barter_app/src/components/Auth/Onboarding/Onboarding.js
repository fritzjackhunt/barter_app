import React, {useRef, Fragment, useEffect} from 'react';
import {Box, Text} from '../../theme';
import {Dimensions} from 'react-native';
import {Butterfly} from '../../../Icons';
import {useScrollHandler} from 'react-native-redash';
import Animated, {divide} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

/* Components */
import Slide from './Slide';
import Dot from './Dot';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Your Better financial Half',
    body:
      'Managing Your funds should be the easiest task on your to-do-lis, so we created Barter just for you',
  },
  {
    title: 'Borderless Payment Experience',
    body:
      'Create custom virtua USD card at affordable rates for your payments and subscriptions',
  },

  {
    title: 'Take Control Over Your Money Anytime, Anywhere',
    body:
      "Always know what's going on with your money. Thanks for the instant notification",
  },
  {
    title: 'Account Protection',
    body: 'Barter is secured by Flutterwave. Your money is always safe with us',
  },
];

function Onboarding({navigation}) {
  return (
    <Box flex={1} backgroundColor="primary">
      <Box height={height * 65}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingTop="m">
            <Butterfly width={40} height={40} />
            <Text
              variant="title1"
              color="black"
              fontSize={30}
              fontweight="bold"
              textDecorationStyle="solid"
              style={{marginLeft: 3}}
              >
              pappyzino
            </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Onboarding;
