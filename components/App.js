import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Login from './Login';

class App extends React.Component{
    render(){
        return(
            <View>
                <Header title = {'Assessment 10 Score'}></Header>
                <Login/>
            </View>
        );
    }
}
export default App;
