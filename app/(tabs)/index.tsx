import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.trophy}>🏆</Text>

      <Text style={styles.title}>FIFA World Cup Picks</Text>

      <Text style={styles.subtitle}>
        Predict every match.{"\n"}
        Compete with friends.{"\n"}
        Climb the leaderboard.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  trophy: {
    fontSize: 72,
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#0B3D2E",
  },
});