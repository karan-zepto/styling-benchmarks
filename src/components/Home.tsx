import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import Item from './Item';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

let count = 250;
let items = Array.from(Array(count).keys());

const Home = () => {
  const {styles} = useStyles(stylesheet);

  const renderItem = useCallback((i: number) => {
    return <Item i={i} key={i.toString()} />;
  }, []);

  return <ScrollView style={styles.root}>{items.map(renderItem)}</ScrollView>;
};

const stylesheet = createStyleSheet(() => ({
  root: {
    height: '48%',
  },
}));

export default Home;
