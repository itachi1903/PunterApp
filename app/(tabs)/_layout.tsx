import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Platform, Text } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Svg, { Polygon } from 'react-native-svg';

// 🏠 Floating Hexagon Home Button
const FloatingHomeButton = ({ onPress, focused  }: { onPress: () => void, focused : boolean }) => (
  <View style={styles.centerContainer}>
    {/* Hexagon Button with SVG */}
    <TouchableOpacity style={styles.hexagonContainer} onPress={onPress} activeOpacity={0.7}>
      <Svg width="70" height="70" viewBox="0 0 100 100">
        <Polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="#111"
          stroke="#FFD700"
          strokeWidth="3"
        />
      </Svg>
      <Ionicons name="home-outline" size={30} color={focused ? "yellow" : 'gray'} style={styles.homeIcon} />
    </TouchableOpacity>
    <Text style={[styles.homeText, { color: focused ? "yellow" : 'gray' }]} onPress={onPress}>Home</Text>
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "yellow",
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: {
          marginBottom:10,
          marginTop:10
        }
      }}>

      {/* Free Tips */}
      <Tabs.Screen
        name="freeTip"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="poker-chip" size={28} color={color} />
          ),
        }}
      />

      {/* VIP Tips */}
      <Tabs.Screen
        name="vipTip"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="diamond-stone" size={28} color={color} />
          ),
        }}
      />

      {/* Home (Floating Hexagon) */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <FloatingHomeButton onPress={onPress} focused={accessibilityState?.selected} />
          ),
          tabBarIcon: () => null,
        }}
      />


      {/* Rankings */}
      <Tabs.Screen
        name="rankings"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" size={28} color={color} />
          ),
        }}
      />

      {/* Menu */}
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" size={28} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

// 🔹 **Styles**
const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    height: 80,
    backgroundColor: "#1F1F1F",
    borderTopLeftRadius: 20,
    justifyContent: "center",
    borderTopRightRadius: 20,
  },

  // 🔺 **Curved Background Effect**
  curvedTabBackground: {
    position: "absolute",
    bottom: 0,
    width: 100,
    height: 50,
    backgroundColor: "#111",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    zIndex: 1,
  },
  centerContainer: {
    position: "absolute",
    top: "-50%",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    alignItems: "center",
  },
  hexagonContainer: {
    width: 70,
    height: 70,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  homeIcon: {
    position: "absolute",
  },
  homeText: {
    position: "absolute",
    top: 75
  }
});

