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
    height: 48,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
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
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  eye: {
    paddingHorizontal: 12,
    fontSize: 18,
  },
  inputWithIcon: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
  },
});
