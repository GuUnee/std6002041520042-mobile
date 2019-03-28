import React from 'react';
import { View,Text } from 'react-native';
import CardSection from './CardSection';

class Card extends React.Component{
    render(){
        return(
            <View>
                <Text>Thanapong Nongnuch</Text>
                <CardSection/>
            </View>
        );
    }
}
export default Card;