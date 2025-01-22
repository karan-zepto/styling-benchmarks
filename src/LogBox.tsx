import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import useLogsStore from './store/useLogsStore';

const LogBox = () => {
  const logs = useLogsStore(state => state.logs);

  return (
    <ScrollView style={styles.root}>
      {logs.map((log, i) => (
        <Text key={i}>{log}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '50%',
    backgroundColor: 'lightgray',
  },
});

export default LogBox;
