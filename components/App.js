import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component{
    render(){
        return(
            <View>
                <Header title = {'Albums'}></Header>
                <Text style={{fontSize: 15}}>Thanapong Nongnuch</Text>
                <Card/>
            </View>
        );
    }
}
export default App;