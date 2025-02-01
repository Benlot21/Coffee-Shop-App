import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, ActivityIndicator} from 'react-native'
import { ToastAndroid } from 'react-native';
import React, { useContext, useState } from 'react'

import Colors from '../../constant/Colors'
import {useRouter} from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db, doc, getDoc} from './../../config/firebaseConfig'
import { UserDetailContext } from '../../context/UserDetailContext';


export default function signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const onSignInClick=()=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(async(resp)=>{
      const user=resp.user
      console.log(user)
      await getUserDetail();
      setLoading(false);
      router.replace('/(tabs)/home');
    }).catch(e=>{
      console.log(e)
      setLoading(false);
      ToastAndroid.show('Incorrect Email & Password', ToastAndroid.BOTTOM); 
    })
  }

  const getUserDetail=async()=>{
    const result = await getDoc(doc(db, 'users', email));
    console.log(result.data());
    setUserDetail(result.data())
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
                disabled={loading}
                  style={{
                      padding: 15,
                      backgroundColor: 'white',
                      width: '100%',
                      marginTop: 25,
                      borderRadius: 10,
                  }}
              >
                  {!loading ? <Text style={{
                      fontFamily: 'Outfit',
                      fontSize: 20,
                      color: 'black',
                      textAlign: 'center',
                  }}>Sign In</Text> :
                  <ActivityIndicator size = {'large'} color={'black'}/> 
                }
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
