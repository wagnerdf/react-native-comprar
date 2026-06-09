import { Button } from "@/components/Button";
import { styles } from "@/components/styles/login.styles";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    const success = login(user, pass);

    if (success) {
      router.replace("/(tabs)");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("@/assets/logo-1x.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu usuário"
                value={user}
                onChangeText={setUser}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputWithIcon}
                  placeholder="Digite sua senha"
                  secureTextEntry={!showPassword}
                  value={pass}
                  onChangeText={setPass}
                  autoCapitalize="none"
                />

                <Text
                  style={styles.eye}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </Text>
              </View>
            </View>

            <Button title="Entrar" onPress={handleLogin} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
