import React from 'react';
import { View,Text,Image } from 'react-native';

class CardSection extends React.Component{
    render(){
        return(
            <View>
                {this.props.children}
            </View>
        );
    }
}
export default CardSection;