import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        © 2024 VendiPro. Todos os direitos reservados.
      </Text>
      <Text style={styles.text}>Contato: info@VendiPro.com.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#333",
    padding: 16,
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Footer;
