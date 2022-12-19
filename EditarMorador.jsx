import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function EditarMorador({ navigation, route }) {
  const { moradorId } = route.params;
  const [nome, setNome] = useState('');
  const [apto, setApto] = useState('');
  const [bloco, setBloco] = useState('');

  function handleSalvar() {
    // salve as alterações no banco de dados ou no estado da aplicação
    navigation.goBack();
  }

  return (
    
    <View>
      <Text>Edição de morador</Text>
      <TextInput value={nome} onChangeText={setNome} placeholder="Nome" />
      <TextInput value={apto} onChangeText={setApto} placeholder="Apto" />
      <TextInput value={bloco} onChangeText={setBloco} placeholder="Bloco" />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

export default EditarMorador;
