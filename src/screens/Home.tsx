import {useTheme} from '@shopify/restyle';
import React from 'react';
import {Text, View} from 'react-native';
import {Theme} from '../theme';

const Home = () => {
  const theme = useTheme<Theme>();
  const {mainBackground} = theme.colors;
  return (
    <View style={{flex: 1, backgroundColor: mainBackground}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
