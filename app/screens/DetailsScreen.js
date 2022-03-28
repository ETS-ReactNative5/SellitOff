import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText.android";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function DetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          style={styles.listDetails}
          title="Najuna James"
          subtitle="5 Listings"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 20,
    marginLeft: 10,
  },
  price: {
    fontWeight: "400",
    color: colors.secondary,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default DetailsScreen;
