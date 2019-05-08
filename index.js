/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootScene from './src/RootScene';

import React from 'react'

export default function index() {
  return (
    <RootScene />
  )
}



AppRegistry.registerComponent(appName, () => index);
