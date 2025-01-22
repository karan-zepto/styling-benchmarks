import React from 'react';
import {Theme} from '../theme';
import {createBox, createText} from '@shopify/restyle';

type Props = {
  i: number;
};

const View = createBox<Theme>();
const Text = createText<Theme>();

const Item = ({i}: Props) => {
  return (
    <View
      borderColor={'cardPrimaryBackground'}
      padding={'m'}
      gap={'x5'}
      borderWidth={1}>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </View>
  );
};

export default Item;
