import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Najuna James",
    Description:
      "Browse over 130k remote & local jobs at the worlds most innovative startups - from seed stage to post-IPO.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Najuna James",
    Description:
      " Press r │ reload app › Press m │ toggle menu› Press d │ show developer tools› shift+d │ toggle auto opening developer tools on startup (disabled)",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete the message from messages
    setMessages(messages.filter((m) => m.id != messages.id));
    //call the server to delete too
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.Description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            //simulated since no backend yet
            {
              id: 2,
              title: "T2",
              Description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
