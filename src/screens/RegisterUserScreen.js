import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const RegisterUserScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [alias, setAlias] = useState('');
  const [clave, setClave] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');
  let ip = `10.10.3.72`;

  const handleRegister = async () => {
    let url = `http://${ip}/coffeeshop/api/services/admin/administrador.php?action=createRow`;
    const formData = new FormData();
    formData.append('nombreAdministrador', nombre);
    formData.append('apellidoAdministrador', apellido);
    formData.append('correoAdministrador', correo);
    formData.append('aliasAdministrador', alias);
    formData.append('claveAdministrador', clave);
    formData.append('confirmarClave', confirmarClave);

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.status) {
      Alert.alert('Success', data.message);
      // Reseteamos los estados para vaciar los campos
      setNombre('');
      setApellido('');
      setCorreo('');
      setAlias('');
      setClave('');
      setConfirmarClave('');
    } else {
      Alert.alert('Error', data.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register User</Text>
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
      <TextInput
        label="Alias"
        value={alias}
        onChangeText={setAlias}
        style={styles.input}
      />
      <TextInput
        label="Clave"
        value={clave}
        onChangeText={setClave}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        label="Confirmar Clave"
        value={confirmarClave}
        onChangeText={setConfirmarClave}
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
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

export default RegisterUserScreen;
