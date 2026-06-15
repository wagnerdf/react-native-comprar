import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2C46B1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/background.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
}
