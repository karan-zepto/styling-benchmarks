import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Item from './Item';

let count = 250;
let items = Array.from(Array(count).keys());

const Home = () => {
  const renderItem = useCallback((i: number) => {
    return <Item i={i} key={i.toString()} />;
  }, []);

  return <ScrollView style={styles.root}>{items.map(renderItem)}</ScrollView>;
};

const styles = StyleSheet.create({
  root: {
    height: '50%',
  },
});

export default Home;
