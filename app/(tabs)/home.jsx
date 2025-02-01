import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Colors from '../../constant/Colors'

export default function Home() {
  const router = useRouter();

  // Dummy featured coffee data
  const featuredCoffees = [
    { id: "1", name: "Cappuccino", price: "$4.99", image: require("../../assets/images/cappuccino.png") },
    { id: "2", name: "Latte", price: "$5.49", image: require("../../assets/images/latte.png") },
    { id: "3", name: "Espresso", price: "$3.99", image: require("../../assets/images/espresso.png") },
  ];

  return (
    <ImageBackground
    source={require('../../assets/images/home-bg.jpg')}
    style={styles.background}
    >
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Coffee Haven ☕</Text>
      </View>

      {/* Promotional Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🔥 Special Offer: Buy 1 Get 1 Free! 🔥</Text>
      </View>

      {/* Featured Coffee Section */}
      <Text style={styles.sectionTitle}>🌟 Featured Coffees</Text>
      <FlatList
        horizontal
        data={featuredCoffees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/menu')}>
        <Text style={styles.buttonText}>🍵 View Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.push('/(tabs)/cart')}>
        <Text style={styles.buttonText}>🛒 View Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => router.push('/(tabs)/profile')}>
        <Text style={styles.buttonText}>👤 Profile</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.Black,
  },
  banner: {
    backgroundColor: "#FFD59A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#6F4E37",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: "#8B5E3C",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

