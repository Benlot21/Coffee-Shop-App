import { Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import Colors from '../constant/Colors'
import { useRouter } from "expo-router";

const router = useRouter()

export default function Index() {
  return (
    <View
      
      style={{
        flex: 1,
        backgroundColor: Colors.White
      }}
    >
      <Image
        source={require('../assets/images/coffee-bg.jpg')}  // Correct relative path
        style={{ width: '100%', height: 300 }}  // Adjust image size as needed
      />

      <View style={{
        padding: 25,
        backgroundColor: '#FFD59A',
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>Welcome to my Coffee Shop</Text>

        <Text style={{
          fontSize: 20,
          marginTop: 20,
          color: 'black',
          fontStyle: "italic",
          textAlign: 'center',
        }}>"Taste like never before"</Text>

        <TouchableOpacity style={[styles.button,{
          marginTop: 50,
        }]}
        onPress={() => router.push('/auth/signUp')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {
            borderWidth: 1,
            backgroundColor: Colors.Primary,
            borderBlockColor: Colors.White,
            marginTop: 20,
        }]}
        onPress={() => router.push('./auth/signIn')}>
          <Text style={styles.buttonText}>Already Have an Account?</Text>
        </TouchableOpacity>

      </View>
    </View> 

  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,

  }
})
