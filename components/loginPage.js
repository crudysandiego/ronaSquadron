import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { setStateForKey } from "react-native-redux"

import { buttons } from './commonStyles'

const LoginPage = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  let pass = '';

  const login = () => {
    setStateForKey("userName", value)
    navigation.navigate('TabContainer');
  }

    return (
        <SafeAreaView style={[styles.scene]}>
            <View style={[styles.loginView]}>
                <TextInput
                  placeholder='Username'
                  style={styles.loginTextInput}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                />
                <View style={[styles.passView]}>
                    <TextInput
                      placeholder='Password'
                      style={styles.loginTextInput}
                      onChangeText={() => {}}
                    />
                </View>
                <View style={buttons.buttonView}>
                    <TouchableOpacity style={buttons.customBtn} onPress={login}>
                        <Text style={buttons.customBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    loginView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        fontSize: 30
    },
    passView: {
        marginTop: 10
    },
    welcomeText: {
        fontSize: 20
    },
    loginTextInput: {
        height: 50,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});