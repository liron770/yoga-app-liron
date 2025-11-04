import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    // ⬇️ Replace this IP with your computer's local IP
    fetch("http://172.25.109.238:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("❌ Error: " + err.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
