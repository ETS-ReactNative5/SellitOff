import React from "react";
import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageSCreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        color={colors.white}
        size={40}
      />
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={40}
        color={colors.white}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  deleteIcon: {
    top: 40,
    left: 30,
    position: "absolute",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageSCreen;
