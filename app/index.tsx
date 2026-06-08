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
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={user}
          onChangeText={setUser}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={pass}
          onChangeText={setPass}
        />
      </View>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
