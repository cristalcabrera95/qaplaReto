import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

export default class Home extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
    //Funcion cerrar sesion
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(function () { })
            .catch(function (error) {
            });
    }



    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20 }}> Hi <Text style={{ color: '#e93766', fontSize: 20 }}>
                    {" "} {currentUser && currentUser.email}!
                </Text></Text>
                <Button title="Cerrar Sesion" onPress={this.handleSignOut} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})