import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  i: number;
};

const Item = ({i}: Props) => {
  const styles = useMemo(() => createStyles('red', 12), []);

  return (
    <View style={styles.item}>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </View>
  );
};

const createStyles = (color: string, paddding: number) =>
  StyleSheet.create({
    root: {
      height: '50%',
    },
    item: {
      borderColor: color,
      borderWidth: 1,
      padding: paddding,
      gap: 5,
    },
  });

export default Item;
