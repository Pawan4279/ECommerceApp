/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store/store';

export default function Main(props) {
    return (
      <Provider store={store}>
        <PaperProvider
        >
          <App data={props} />
        </PaperProvider>
      </Provider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
