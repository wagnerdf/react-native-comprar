import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function APP() {
  return (
    <View style={styles.container}>
      <Text>App Comprar 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
