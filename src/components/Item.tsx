import React from 'react';
import {Text, View} from 'tamagui';

type Props = {
  i: number;
};

const Item = ({i}: Props) => {
  return (
    <View borderWidth={1} padding={1} borderColor={'blue'} gap={5}>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </View>
  );
};

export default Item;
