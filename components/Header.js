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
        backgroundColor: 'green',
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    text: {
        alignItems: 'center',
        fontSize:25,
        fontWeight: 'bold',
        color: 'white',
    },
};

export default Header;
