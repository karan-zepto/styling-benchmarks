import {create} from 'zustand';

interface State {
  logs: string[];
  addLog(log: string): void;
}

const useLogsStore = create<State>(set => ({
  logs: [],
  addLog: log => {
    set(state => ({
      logs: [...state.logs, log],
    }));
  },
}));

export default useLogsStore;
