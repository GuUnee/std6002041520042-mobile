import {AppRegistry} from 'react-native'; //method from library
import {name as Appname} from './app.json';
import App from './components/App';

AppRegistry.registerComponent(Appname, () => App);