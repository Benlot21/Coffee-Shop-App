import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false
    }}>
      <Tabs.Screen 
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={24} color="black" />,
          tabBarLabel: 'Home'
        }}
      />
      <Tabs.Screen 
      name="cart"
      options={{
        tabBarIcon: ({ color, size }) => <Feather name="shopping-cart" size={24} color="black" />,
        tabBarLabel: 'Cart'
      }}
      />
      <Tabs.Screen 
      name="menu"
      options={{
        tabBarIcon: ({ color, size }) => <Fontisto name="coffeescript" size={24} color="black" />,
        tabBarLabel: 'Menu'
      }}
      />
      <Tabs.Screen 
      name="profile"
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={24} color="black" />,
        tabBarLabel: 'Profile'
      }}
      />
    </Tabs>
  );
}
