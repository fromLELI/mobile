import {Image, Text, Box, Checkbox, ScrollView} from 'native-base';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if(numSecao < secoes.length -1){
      setNumSecao(numSecao+1);
    }
    
  }
  
  function voltarSecao(){
    if(numSecao>0){
      setNumSecao(numSecao-1);
    }
  }

  return (

    <ScrollView flex={1} backgroundColor="white" padding={3.5}>
      
      <Image source={Logo} alt='Logo Voll' alignSelf="center" mt={10}/>
      
      <Titulo>{secoes[numSecao].titulo} </Titulo>

      <Box>

        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
          return <EntradaTexto placeholder={entrada.placeholder} key={entrada.id}>{entrada.label}</EntradaTexto>
          })
        }

      </Box>

      <Box>

        <Text color="blue.800" fontWeight="bold" mb={2} mt={2} fontSize='md'>Selecione os planos:</Text>

        {
          secoes[numSecao].checkbox.map(checkbox => {
          return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
          })
        }
        
      </Box>

      {numSecao > 0 && <Botao onPress={()=> voltarSecao()} bgColor="gray.400">Voltar</Botao>}

      <Botao onPress={()=> avancarSecao()} mt={4}>Avançar</Botao>
      


    </ScrollView>

  );
}