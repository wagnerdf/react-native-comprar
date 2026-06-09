import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d2d8",
    padding: 24,
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  inputGroup: {
    width: "100%",
    gap: 6,
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
});
