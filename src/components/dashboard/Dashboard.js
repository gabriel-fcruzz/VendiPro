import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Dashboard = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <NavBar onLogout={onLogout} />

      {/* Boas-vindas */}
      <View style={styles.greetingSection}>
        <Text style={styles.greetingText}>Bem-vindo ao VendiPro!</Text>
        <Text style={styles.userInfo}>Usuário: João Silva</Text>
      </View>

      {/* Resumo da empresa */}
      <View style={styles.summarySection}>
        <Text style={styles.summaryTitle}>Resumo da Empresa</Text>
        <Text style={styles.summaryItem}>Clientes ativos: 150</Text>
        <Text style={styles.summaryItem}>Produtos cadastrados: 45</Text>
        <Text style={styles.summaryItem}>Relatórios pendentes: 2</Text>
      </View>

      {/* Ações rápidas */}
      <View style={styles.quickActions}>
        <Button
          title="Adicionar Cliente"
          onPress={() => console.log("Adicionar Cliente")}
        />
        <View style={styles.spacing}>
          <Button
            title="Criar Relatório"
            onPress={() => console.log("Criar Relatório")}
          />
        </View>
      </View>

      {/* Tarefas pendentes */}
      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Tarefas Pendentes</Text>
        <Text style={styles.taskItem}>Revisar relatório financeiro</Text>
        <Text style={styles.taskItem}>Atualizar cadastro de produto</Text>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  spacing: {
    marginTop: 5,
  },

  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  greetingSection: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  userInfo: {
    fontSize: 18,
    color: "#666",
  },
  summarySection: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  summaryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryItem: {
    fontSize: 18,
    marginBottom: 5,
    color: "#444",
  },
  quickActions: {
    marginBottom: 20,
  },
  tasksSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  tasksTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskItem: {
    fontSize: 18,
    marginBottom: 5,
    color: "#444",
  },
});

export default Dashboard;
