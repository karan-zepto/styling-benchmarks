import {useTheme} from '@shopify/restyle';
import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from '../theme';

type Props = {
  i: number;
};

const Item = ({i}: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.item}>
      <Text>Title {i}</Text>
      <Text>This is subtitle for item {i}</Text>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    root: {
      height: '50%',
    },
    item: {
      borderColor: theme.colors.cardPrimaryBackground,
      borderWidth: 1,
      padding: theme.spacing.m,
      gap: 5,
    },
  });

export default Item;
