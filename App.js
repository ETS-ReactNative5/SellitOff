import React, { useState } from "react";

import Screen from "./app/components/Screen";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import styles from "./app/config/styles";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  // return <WelcomeScreen />;
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
