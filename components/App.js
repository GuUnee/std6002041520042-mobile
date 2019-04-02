import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Header title = {'Albums'}></Header>
                <View style={{ alignItems: 'center', paddingTop: 10 }}>
                    <Text style={{ fontSize: 20, color: 'green',fontWeight: 'bold' }}>Thanapong Nongnuch</Text>
                </View>
                <Card/>
            </View>
        );
    }
}
export default App;
