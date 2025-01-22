import React, {useCallback} from 'react';
import Item from './Item';
import {ScrollView} from 'tamagui';

let count = 250;
let items = Array.from(Array(count).keys());

const Home = () => {
  const renderItem = useCallback((i: number) => {
    return <Item i={i} key={i.toString()} />;
  }, []);

  return <ScrollView height={'50%'}>{items.map(renderItem)}</ScrollView>;
};

export default Home;
