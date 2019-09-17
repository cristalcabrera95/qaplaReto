import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CodeScreen extends Component {
    render() {
        return (
            <View>
                <Text> Tienes un codigo referencial </Text>
                <TextInput
                    placeholder="Codigo"
                    autoCapitalize="none"
                    style={styles.textInput}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        fontSize: 20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15
      }
})
