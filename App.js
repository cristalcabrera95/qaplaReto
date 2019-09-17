import React, {Component} from 'react';
import * as firebase from "firebase";
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CodeScreen from './Componentes/CodeScreen'
import Loading from './Componentes/Loading'
import SignUp from './Componentes/SingUp'
import Login from './Componentes/Login'
import Home from './Componentes/Home'

var firebaseConfig = {
  apiKey: "AIzaSyDiTkl4458IndMe5pRqy0mUgPn6gEWWdMU",
  authDomain: "react-native-b544f.firebaseapp.com",
  databaseURL: "https://react-native-b544f.firebaseio.com",
  projectId: "react-native-b544f",
  storageBucket: "",
  messagingSenderId: "774654050955",
  appId: "1:774654050955:web:aae377db1415dc4d728a8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//rooter
const RootStack = createStackNavigator(
  {
    CodeScreen : CodeScreen,
    Loading : Loading,
    SignUp : SignUp,
    Login: Login,
    Home : Home
  },
  {
    initialRouteName: 'Loading',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


