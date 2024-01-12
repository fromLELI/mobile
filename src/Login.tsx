import {VStack, Image, Text, Box, Link} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';


export default function Login({navigation}) {
  return (
    <VStack flex={1} backgroundColor="white" alignItems="center" p={5} justifyContent="center">
      
      <Image source={Logo} alt='Logo Voll'/>
      
      <Titulo>Faça Login em sua conta: </Titulo>

      <Box>
        <EntradaTexto placeholder='Digite seu e-mail'>Email</EntradaTexto>

        <EntradaTexto placeholder='Digite sua senha'>Senha</EntradaTexto>
      </Box>
      
      <Botao>Entrar</Botao>

      <Link href="https://www.alura.com.br" mt={2}>
      Esqueceu sua senha 
      </Link>

      <Box width="100%" flexDirection="row" justifyContent="center" mt={8}>
        
        <Text>Ainda não tem cadastro? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text  color="blue.500">Faça seu cadastro agora</Text>
          </TouchableOpacity>
        
      </Box>

    </VStack>

  );
}