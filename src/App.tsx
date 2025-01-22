import React, {
  Profiler,
  ProfilerOnRenderCallback,
  useCallback,
  useState,
} from 'react';
import {Button, View} from 'react-native';
import {TamaguiProvider} from 'tamagui';
import Home from './components/Home';
import LogBox from './LogBox';
import useLogsStore from './store/useLogsStore';
import config from './theme';

const App = () => {
  const [count, setCount] = useState(1);
  const addLog = useLogsStore(state => state.addLog);

  const onRender: ProfilerOnRenderCallback = useCallback(
    (
      id,
      phase,
      actualDuration, // time spent rendering the committed update
    ) => {
      addLog(`[Tamagui][${phase}] Pass ${count}: ${actualDuration} ms`);
    },
    [count, addLog],
  );

  const reRender = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View>
      <Button title="Rerender" onPress={reRender} />
      <TamaguiProvider config={config}>
        <Profiler key={count} id="Home" onRender={onRender}>
          <Home />
        </Profiler>
      </TamaguiProvider>
      <LogBox />
    </View>
  );
};

export default App;
