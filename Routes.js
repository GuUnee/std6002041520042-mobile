import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import App from './components/App'
import Login from './components/Login'
import Profile from './components/Profile'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "app" component = {App} initial = {true} hideNavBar={ true }/>
         <Scene key = "login" component = {Login} hideNavBar={ true }/>
         <Scene key = "profile" component = {Profile} hideNavBar={ true }/>
      </Scene>
   </Router>
)
export default Routes
