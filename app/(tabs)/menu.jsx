import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Colors from "./../../constant/Colors";

export default function Menu() {
  const router = useRouter();

  const coffeeMenu = [
    { id: "1", name: "Cappuccino", price: "$4.99", image: require("../../assets/images/cappuccino.png") },
    { id: "2", name: "Latte", price: "$5.49", image: require("../../assets/images/latte.png") },
    { id: "3", name: "Espresso", price: "$3.99", image: require("../../assets/images/espresso.png") },
    { id: "4", name: "Americano", price: "$4.29", image: require("../../assets/images/americano.png") },
    { id: "5", name: "Mocha", price: "$5.99", image: require("../../assets/images/mocha.png") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Menu</Text>
      <FlatList
        data={coffeeMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => alert(`${item.name} added to cart!`)}>
              <Text style={styles.addButtonText}>➕ Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.White },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  card: { backgroundColor: "white", padding: 15, marginBottom: 15, borderRadius: 10, alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 10 },
  coffeeName: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
  price: { fontSize: 16, color: "#888" },
  addButton: { backgroundColor: Colors.Primary, padding: 10, borderRadius: 5, marginTop: 10 },
  addButtonText: { color: "white", fontWeight: "bold" },
});
