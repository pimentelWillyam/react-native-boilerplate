import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";
import { NavigationStackTypes } from "../Routes";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

  const navigation = useNavigation<NavigationStackTypes>()


  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Form')}>Home</Text>
    </View>
  );
}