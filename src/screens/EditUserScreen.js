import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const EditUserScreen = () => {
  const [userId, setUserId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  let ip = `10.10.3.72`;

  const handleEdit = async () => {
    let url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=updateRow`;
    const formData = new FormData();
    formData.append('idAdministrador', userId);
    formData.append('nombreAdministrador', nombre);
    formData.append('apellidoAdministrador', apellido);
    formData.append('correoAdministrador', correo);

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.status) {
      Alert.alert('Success', data.message);
    } else {
      Alert.alert('Error', data.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User</Text>
      <TextInput
        label="User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
      />
      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        label="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleEdit} style={styles.button}>
        Edit User
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
  },
});

export default EditUserScreen;
