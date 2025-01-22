import React, {Profiler, ProfilerOnRenderCallback, useState} from 'react';
import {Button, View} from 'react-native';
import Home from './components/Home';

const App = () => {
  const [count, setCount] = useState(1);

  const onRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration, // time spent rendering the committed update
  ) => {
    console.log(`[Native] Pass ${count}: ${actualDuration} ms`);
  };

  return (
    <View>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Profiler key={count} id="Home" onRender={onRender}>
        <Home />
      </Profiler>
    </View>
  );
};

export default App;
