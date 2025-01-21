import React, {
  Profiler,
  ProfilerOnRenderCallback,
  useCallback,
  useState,
} from 'react';
import {Button, View} from 'react-native';
import {TamaguiProvider, createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';
import Home from './components/Home';
import LogBox from './LogBox';
import useLogsStore from './store/useLogsStore';

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// get nice types
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  const [count, setCount] = useState(1);
  const addLog = useLogsStore(state => state.addLog);

  const onRender: ProfilerOnRenderCallback = useCallback(
    (
      id,
      phase,
      actualDuration, // time spent rendering the committed update
    ) => {
      addLog(`[Native][${phase}] Pass ${count}: ${actualDuration} ms`);
    },
    [count, addLog],
  );

  const reRender = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View>
      <Button title="Rerender" onPress={reRender} />
      <Profiler key={count} id="Home" onRender={onRender}>
        <TamaguiProvider config={defaultConfig}>
          <Home />
        </TamaguiProvider>
      </Profiler>
      <LogBox />
    </View>
  );
};

export default App;
