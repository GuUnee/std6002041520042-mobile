import React from 'react';
import { View,Text } from 'react-native';

class Header extends React.Component{
    render(){
        return(
            <View style={style.header}>
                <Text style={style.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const style = {
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'green'
    },
    text: {
        alignItems: 'center',
        fontSize:25,
        color: 'white',
    },
};

export default Header;
