import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'

import Colors from '../../constant/Colors'
import {useRouter} from 'expo-router'

export default function SignUp() {
    const router = useRouter()
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 100,
            flex: 1,
            backgroundColor: Colors.Primary,
            padding: 25,
        }}>
            <Image source={require('../../assets/images/coffee-logo.jpg')}
            style={{
                width: 180,
                height: 180,
                borderRadius: 20,
            }}
            />

            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-Bold',
                marginTop: 20,
            }}>
                Create New Account
            </Text>

            <TextInput placeholder='Full Name' style={styles.textInout}></TextInput>
            <TextInput placeholder='Email' style={styles.textInout}></TextInput>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInout}></TextInput>

            <TouchableOpacity 
                style={{
                    padding: 15,
                    backgroundColor: 'white',
                    width: '100%',
                    marginTop: 25,
                    borderRadius: 10,
                }}
            >
                <Text style={{
                    fontFamily: 'Outfit',
                    fontSize: 20,
                    color: 'black',
                    textAlign: 'center',
                }}>Create Account</Text>
            </TouchableOpacity>
            
            <View style={{
                display: 'flex',
                flexDirection: 'row', gap: 5,
                marginTop: 20
            }}>
                <Text styles={{
                    fontFamily: 'Outfit',
                }}>Already Have an Account?</Text>
                <Pressable
                onPress={() => router.push('/auth/signIn')}
                >
                    <Text style={{
                        color: 'white',
                        fontFamily: 'outfit-bold'
                    }}>Sign in Here</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInout: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        fontSize: 18,
        marginTop: 20,
        borderRadius: 8,
    }
})
