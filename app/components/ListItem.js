import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText.android";
import colors from "../config/colors";

function ListItem({
  title,
  subtitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
  style,
}) {
  console.log;
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={[styles.listingContainer, style]}>
          {IconComponent}
          {/* Render image only if it is available */}
          {image && <Image style={styles.listImage} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.listingTitle}>{title}</AppText>
            {subtitle && (
              <AppText style={styles.listingSubTitle}>{subtitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  price: {
    fontWeight: "400",
    color: colors.secondary,
  },

  listingSubTitle: {
    fontSize: 15,
    color: colors.grey,
  },
  listingTitle: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  listImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listingContainer: {
    flexDirection: "row",
    padding: 15,
  },
});
export default ListItem;
