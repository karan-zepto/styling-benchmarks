import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

let count = 250;
let items = Array.from(Array(count).keys());

const Home = () => {
  const renderItem = useCallback((i: number) => {
    return (
      <View key={i.toString()} style={styles.item}>
        <Text>Text {i}</Text>
      </View>
    );
  }, []);

  return <ScrollView>{items.map(renderItem)}</ScrollView>;
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
  },
});

export default Home;
