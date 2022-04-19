/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewFeedScreen from './screen/newfeed/NewFeedScreen'

AppRegistry.registerComponent(appName, () => NewFeedScreen);
