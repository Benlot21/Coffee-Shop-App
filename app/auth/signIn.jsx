import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, Platform, Alert} from 'react-native'
import { ToastAndroid } from 'react-native';
import React, { useState } from 'react'

import Colors from '../../constant/Colors'
import {useRouter} from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './../../config/firebaseConfig'


export default function signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showMessage = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.BOTTOM);
    } else {
      Alert.alert(message);
    }
  };
  
  // Usage
  showMessage('Incorrect Email & Password');

  const onSignInClick=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(resp=>{
      const user=resp.user
      console.log(user)
    }).catch(e=>{
      console.log(e)
      ToastAndroid.show('Incorrect Email & Password', ToastAndroid.BOTTOM); 
    })
  }
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
                  Welcome Back
              </Text>
  
              <TextInput placeholder='Email' onChangeText={(value) => setEmail(value)} style={styles.textInout}></TextInput>
              <TextInput placeholder='Password' onChangeText={(value) => setPassword(value)} secureTextEntry={true} style={styles.textInout}></TextInput>
  
              <TouchableOpacity 
              onPress={onSignInClick}
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
                  }}>Sign In</Text>
              </TouchableOpacity>
              
              <View style={{
                  display: 'flex',
                  flexDirection: 'row', gap: 5,
                  marginTop: 20
              }}>
                  <Text style = {{
                      fontFamily: 'Outfit',
                  }}>Don't have an account?</Text>
                  <Pressable
                  onPress={() => router.push('/auth/signUp')}
                  >
                      <Text style={{
                          color: 'white',
                          fontFamily: 'outfit-bold'
                      }}>Create New Here</Text>
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
