import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../config/colors";
function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          iconColor={colors.white}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
  },
});

export default CategoryPickerItem;
