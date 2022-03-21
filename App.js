//import { StatusBar } from 'expo-status-bar';
import { View, StatusBar, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageSCreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;
}
