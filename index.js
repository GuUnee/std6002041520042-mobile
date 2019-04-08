import {AppRegistry} from 'react-native'; //method from library
import {name as Appname} from './app.json';
import Routes from './Routes';

AppRegistry.registerComponent(Appname, () => Routes);