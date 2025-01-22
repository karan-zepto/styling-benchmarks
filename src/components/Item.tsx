import React from 'react';
import {View, Text} from 'react-native';
import {styled} from 'tamagui';

type Props = {
  i: number;
};

const ItemStyled = styled(View, {
  borderWidth: 1,
  padding: '$4',
  borderColor: 'blue',
  gap: '$2',
});

const Item = ({i}: Props) => {
  return (
    <ItemStyled>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </ItemStyled>
  );
};

export default Item;
