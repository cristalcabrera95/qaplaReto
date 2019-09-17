import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };
  }
  
   handleLogin = () => {
     firebase
       .auth()
       .signInWithEmailAndPassword(this.state.email, this.state.password)
       .then(() => this.props.navigation.navigate('Home'))
       .catch(error => this.setState({ errorMessage: error.message }))
   }
   
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Inicia Sesión</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Iniciar Sesión" color="#e93766" onPress={this.handleLogin} />
        <View>
        <Text> ¿Aun no tienes cuenta? <Text onPress  ={() => this.props.navigation.navigate('SignUp')} style={{color:'#e93766', fontSize: 18}}> Registrate </Text></Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        height: 40,
        fontSize:20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15
      }
})