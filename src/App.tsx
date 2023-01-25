import React from 'react';
import CineUI from './housekeeping_ui/CineUI';
import { Provider } from 'react-redux';
import { store } from './housekeeping_state/store';

function App() {
  return (
    <Provider store={store}>
      <CineUI />
    </Provider>
  );
}

export default App;
