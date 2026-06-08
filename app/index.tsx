import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Login() {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    const success = login(user, pass);

    if (success) {
      router.replace("/(tabs)");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder="Usuário" onChangeText={setUser} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPass} />
      <Button onPress={handleLogin} />
    </View>
  );
}
