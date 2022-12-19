import React, { useState } from 'react';
import { FlatList, View, Text, Button, TextInput } from 'react-native';

import moradores from './listaMoradores';

function App() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultado, setResultado] = useState(moradores);

  function handleSearch() {
    setResultado(
      moradores.filter((morador) =>
        morador.morador.includes(pesquisa) || (String(morador.apto).includes(pesquisa))
      )
    );
  }

  return (
    <View style={{backgroundColor: '#D3D3D3'}}>
      <Text style={{fontSize: 32, marginTop: 35, textAlign: 'center', backgroundColor: '#708090'}}>Consulta de moradores</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 2}}>
      <TextInput
        value={pesquisa}
        onChangeText={setPesquisa}
        placeholder="Pesquisar por nome ou apto"
        style={{backgroundColor: '#ffffff', padding: 8}}
      />
      <Button title="Pesquisar" onChangeText={handleSearch} onPress={handleSearch} />
      </View>
      <View style={{    flexDirection: 'row',
    justifyContent: 'space-between', backgroundColor: '#778899',color: '#ffffff', padding: 10, fontSize:20}}>
        <Text >Bloco/Apto</Text>
        <Text >Nome</Text>
        <Text >Ações</Text>
      </View>
      <FlatList
        data={resultado}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.2}}>
            <Text style={{ color: '#333', fontSize: 18, marginLeft: 10}}>{item.bloco}{' '}{item.apto}</Text>
            <Text style={{ color: '#333', fontSize: 18, marginRight: 10 }}>{item.morador}</Text>
            {/* flex: 1, textAlign: 'center' estes valores devem ser postos dentro do style do item.morador qunado acertar o botao editar */}
            <Button style={{backgroundColor: '#EEE8AA'}}  title="Editar" />
          </View>
          )}
      />
    </View>
  );
}

export default App;