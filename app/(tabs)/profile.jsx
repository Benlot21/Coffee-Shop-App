import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "./../../config/firebaseConfig";
import Colors from "../../constant/Colors";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <Text style={styles.info}>📧 Email: {auth.currentUser?.email || "User Email"}</Text>
      <Text style={styles.info}>📅 Member Since: 2023</Text>

      <TouchableOpacity style={styles.orderHistoryButton} onPress={() => alert("Viewing Order History...")}>
        <Text style={styles.buttonText}>📜 Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => alert("Logging out...")}>
        <Text style={styles.buttonText}>🚪 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.White, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  info: { fontSize: 18, textAlign: "center", marginBottom: 10 },
  orderHistoryButton: { backgroundColor: Colors.Primary, padding: 15, borderRadius: 10, marginTop: 20 },
  logoutButton: { backgroundColor: "red", padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" },
});
