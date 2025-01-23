import './unistyles';
import React, {
  Profiler,
  ProfilerOnRenderCallback,
  useCallback,
  useState,
} from 'react';
import {Button, StatusBar, View} from 'react-native';
import Home from './components/Home';
import LogBox from './LogBox';
import useLogsStore from './store/useLogsStore';

const App = () => {
  const [count, setCount] = useState(1);
  const addLog = useLogsStore(state => state.addLog);

  const onRender: ProfilerOnRenderCallback = useCallback(
    (
      id,
      phase,
      actualDuration, // time spent rendering the committed update
    ) => {
      if (phase !== 'mount') return;
      addLog(`[Unistyles][${phase}] Pass ${count}: ${actualDuration} ms`);
    },
    [count, addLog],
  );

  const reRender = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View>
      <StatusBar />
      <Button title="Rerender" onPress={reRender} />
      <Profiler key={count} id="Home" onRender={onRender}>
        <Home />
      </Profiler>
      <LogBox />
    </View>
  );
};

export default App;
