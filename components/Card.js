import React from 'react';
import { View,Text,Image,Button } from 'react-native';
import CardSection from './CardSection';

class Card extends React.Component{
    render(){
        return(
            <View>
                <CardSection>
                    <View style={{ alignItems: 'center',padding: 10 }}>
                        <Image style={style.img} source={require('../img/01.jpg')}/>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={{ alignItems: 'center',padding: 10,paddingBottom: 20 }}>
                        <Image style={style.img} source={require('../img/02.jpg')}/>
                    </View>
                </CardSection>

                <CardSection>
                        <Button title="Click Me" color="green" />
                </CardSection>
            </View>
        );
    }
}
const style = {
    img: {
        height: 200,
        width: 400,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'green'
    },
};
export default Card;
