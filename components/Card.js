import React from 'react';
import { View,Text,Image,Button } from 'react-native';
import CardSection from './CardSection';

class Card extends React.Component{
    render(){
        return(
            <View style={{flex: 1,flexDirection: 'column'}}>
                <View>
                    <CardSection>
                        <Image 
                            style={{height: 400,width: 400}}
                            source={{uri: 'http://www.baharfamily.com/wp-content/uploads/2014/07/3D-Animated-Frog-Image.jpg'}}
                        />
                    </CardSection>
                </View>
                <View>
                    <CardSection>
                        <Image 
                            style={{height: 400,width: 400}}
                            source={{uri: 'http://bdfjade.com/data/out/38/5463560-birds-picture.jpg'}}
                        />
                    </CardSection>
                </View>
                <View>
                    <CardSection>
                        <View>
                        <View>
                            <Button title="Click Me" color="green">
                            </Button>
                        </View>
                        </View>
                    </CardSection>
                </View>
            </View>
        );
    }
}
export default Card;
