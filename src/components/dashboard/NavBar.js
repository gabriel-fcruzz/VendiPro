import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <View style={styles.navbar}>
      <Text style={styles.brand}>VendiPro</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigate("/dashboard")} style={styles.navItem}>
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")} style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onLogout()} style={styles.navItem}>
          <Text style={styles.navText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333",
  },
  brand: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItem: {
    marginLeft: 20,
  },
  navText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Navbar;
