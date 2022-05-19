import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton
        text="Delivery"
        buttonColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="PickUp"
        buttonColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 16,
      paddingVertical: 6,
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
