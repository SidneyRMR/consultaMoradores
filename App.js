import React, { useState } from 'react';
import { FlatList, View, Text, Button, TextInput } from 'react-native';

import moradores from './listaMoradores';


function App() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultado, setResultado] = useState(moradores);
  // const [moradores, setMoradores] = useState(moradoresImport)

  function handleSearch() {
    setResultado(
      moradores.filter((morador) =>
        morador.morador.includes(pesquisa) || (String(morador.apto).includes(pesquisa))
      )
    );
  }

  return (
    <View style={{backgroundColor: '#FDF5E6'}}>
      <Text style={{fontSize: 32, marginTop: 35, textAlign: 'center'}}>Consulta de moradores</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <TextInput
        value={pesquisa}
        onChangeText={setPesquisa}
        placeholder="Pesquisar por nome ou apto"
        style={{marginRight: 20, backgroundColor: '#ffffff'}}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
      </View>
      <View style={{    flexDirection: 'row',
    justifyContent: 'space-between', backgroundColor: 'gray', padding: 10, fontSize:20}}>
        <Text >Bloco/Apto</Text>
        <Text >Nome</Text>
        <Text >Ações</Text>
      </View>
      <FlatList
        data={resultado}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ color: '#333', fontSize: 16, marginLeft: 10}}>{item.bloco}{' '}{item.apto}</Text>
            <Text style={{ color: '#333', fontSize: 16, flex: 1, textAlign: 'center' }}>{item.morador}</Text>

            <Button style={{ alignItems: 'left' }} title="Editar" />
            {/* <Button title="Excluir" /> */}
          </View>
          
          )}
      />
    </View>
  );
}

export default App;