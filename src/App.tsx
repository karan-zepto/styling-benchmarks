import React, {
  Profiler,
  ProfilerOnRenderCallback,
  useCallback,
  useState,
} from 'react';
import {Button, View} from 'react-native';
import Home from './components/Home';
import LogBox from './LogBox';
import useLogsStore from './store/useLogsStore';
import theme from './theme';
import {ThemeProvider} from '@shopify/restyle';

const App = () => {
  const [count, setCount] = useState(1);
  const addLog = useLogsStore(state => state.addLog);

  const onRender: ProfilerOnRenderCallback = useCallback(
    (
      id,
      phase,
      actualDuration, // time spent rendering the committed update
    ) => {
      addLog(`[Restyle][${phase}] Pass ${count}: ${actualDuration} ms`);
    },
    [count, addLog],
  );

  const reRender = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View>
      <Button title="Rerender" onPress={reRender} />
      <ThemeProvider theme={theme}>
        <Profiler key={count} id="Home" onRender={onRender}>
          <Home />
        </Profiler>
      </ThemeProvider>
      <LogBox />
    </View>
  );
};

export default App;
