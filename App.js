//import { StatusBar } from 'expo-status-bar';
import { View, StatusBar, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./app/components/Icon";

import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <Screen>
      <AccountScreen />
    </Screen>
  );
}
