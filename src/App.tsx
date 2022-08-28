import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { Router } from './routes/routes';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router />
    </Provider>
  </div>
);

export default App;
