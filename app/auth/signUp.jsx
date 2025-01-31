import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'

import Colors from '../../constant/Colors'
import {useRouter} from 'expo-router'
import { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig'; 
import { doc, setDoc } from 'firebase/firestore'
import { UserDetailContext } from './../../context/UserDetailContext'

export default function SignUp() {
    const router = useRouter();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {userDetail, setUserDetail} = useContext(UserDetailContext)

    const CreateNewAccount = () => {
        if (!fullName || !email || !password) {
            Alert.alert("Error", "All fields are required!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(async(resp)=>{
            const user=resp.user;
            console.log(user);
            await SaveUser(user);
            //save user to database
        })
        .catch(e=>{
            console.log(e.message)
        })
    }

    const SaveUser= async(user)=>{
        const data={
            name: fullName,
            email: email,
            member: false,
            uid: user?.uid
        }
        await setDoc(doc(db, 'users', email),data )
            
        setUserDetail(data);
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
                Create New Account
            </Text>

            <TextInput placeholder='Full Name' onChangeText={(value) => setFullName(value)} style={styles.textInout}></TextInput>
            <TextInput placeholder='Email' onChangeText={(value) => setEmail(value)} style={styles.textInout}></TextInput>
            <TextInput placeholder='Password' onChangeText={(value) => setPassword(value)} secureTextEntry={true} style={styles.textInout}></TextInput>

            <TouchableOpacity
            onPress={CreateNewAccount} 
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
                <Text style={{
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
