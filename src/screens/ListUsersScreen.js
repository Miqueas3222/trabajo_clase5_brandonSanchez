import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { List, Text, Button, Card } from 'react-native-paper';

const ListUsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const ip = '10.10.3.72';  // Asegúrate de usar la IP correcta

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=readAll`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched Data:', data);  // Depuración: imprime los datos recibidos
      if (data.status) {
        setUsers(data.dataset);
      } else {
        Alert.alert('Error', data.error || 'Error fetching users');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Network error');
    }
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    console.log('Rendering item:', item);  // Depuración: imprime el elemento que se está renderizando
    if (item.idAdministrador) {
      console.log('ID undefined for item:', item);  // Depuración: imprime el elemento con ID undefined
      return null;
    }
    return (
      <Card style={styles.card}>
        <Card.Title title={`${item.nombre_administrador} ${item.apellido_administrador}`} />
        <Card.Content>
          <Text>ID: {item.id_administrador}</Text>
          <Text>Correo: {item.correo_administrador}</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id_administrador?.toString() || Math.random().toString()} // Fallback si idAdministrador es undefined
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={fetchUsers}
      />
      <Button mode="contained" onPress={fetchUsers} style={styles.button}>
        Refresh List
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ee',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
  },
  card: {
    marginBottom: 10,
  },
});

export default ListUsersScreen;
