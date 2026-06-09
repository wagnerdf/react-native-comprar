import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2d8",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  inputGroup: {
    width: "100%",
    gap: 4,
  },

  label: {
    fontSize: 14,
    color: "#333",
  },

  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  logo: {
    width: "80%",
    height: 80,
    alignSelf: "center",
    marginBottom: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  form: {
    gap: 16,
  },
});
