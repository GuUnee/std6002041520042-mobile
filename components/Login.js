import React from 'react';
import { View,Text,TextInput,Button,TouchableOpacity,Alert } from 'react-native';
import { Actions } from "react-native-router-flux";
import base64 from 'react-native-base64';
import axios from 'axios';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: ""
    };
  }
  onLogin() {
    axios
      .post("http://128.199.240.120:9999/api/auth/login", {
        email: this.state.Email,
        password: this.state.Password
      })
      .then(res => {
        if (!res.data[0]) {
          Actions.reset("profile");
        }
      })
      .catch(err => {
        Alert.alert(
          'Error',
          'Incorrect email or password.',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        // alert("Please enter correctly");
      });
  }

    render(){
        return(
            <View>
              <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 40,marginLeft: 25,marginRight:25}}
              placeholder=" Email" onChangeText={(Email) => this.setState({Email})}
              value={this.state.Email}
              />
              <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop: 10,marginLeft: 25,marginRight:25}}
              placeholder=" Password" onChangeText={(Password) => this.setState({Password})}
              value={this.state.Password}
              />
              <TouchableOpacity onPress={() => this.onLogin()}>
                <View style={{alignItems: "center",backgroundColor: "green",marginTop: 40}}>
                  <Text style={{ padding: 5, color: "white", fontSize: 20 }}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
        );
    }
}
export default Login;
