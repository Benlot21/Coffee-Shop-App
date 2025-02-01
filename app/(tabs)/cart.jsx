import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Cappuccino", price: "$4.99" },
    { id: "2", name: "Latte", price: "$5.49" },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty!</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemText}>{item.name} - {item.price}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>❌ Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert("Proceeding to Checkout!")}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.White },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  emptyCart: { fontSize: 18, textAlign: "center", marginTop: 20 },
  cartItem: { flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "white", marginBottom: 10, borderRadius: 10 },
  itemText: { fontSize: 18 },
  removeButton: { backgroundColor: "red", padding: 5, borderRadius: 5 },
  removeButtonText: { color: "white", fontWeight: "bold" },
  checkoutButton: { backgroundColor: Colors.Primary, padding: 15, borderRadius: 10, marginTop: 20 },
  checkoutText: { textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" },
});
