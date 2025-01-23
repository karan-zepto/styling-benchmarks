import React from 'react';
import {View, Text} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type Props = {
  i: number;
};

const Item = ({i}: Props) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.item}>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  item: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    padding: theme.margins.md,
    gap: 5,
  },
}));

export default Item;
