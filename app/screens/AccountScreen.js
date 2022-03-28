import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targerScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          style={styles.items}
          title={"Najuna James"}
          subtitle="support@billtrick.com"
          image={require("../assets/mosh.jpg")}
        />
        <View style={styles.container}>
          <FlatList
            style={styles.items}
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate("Messages")}
              />
            )}
          />
        </View>
        <View style={styles.items}>
          <ListItem
            title="Logout"
            IconComponent={
              <Icon name="logout" backgroundColor={colors.primary} />
            }
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  items: {
    backgroundColor: colors.white,
  },
});
export default AccountScreen;
