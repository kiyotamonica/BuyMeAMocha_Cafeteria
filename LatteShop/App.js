import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import { ImageBackground } from 'react-native';
import FadedBackground from '../LatteShop/assets/images/LoginBackground.png';
import background from '../LatteShop/assets/images/AberturaBuyMeAMocha.png';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={TelaHomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='LoginScreen' component={TelaLogin} options={{headerShown: false}} />
        <Stack.Screen name='CadastroScreen' component={TelaCadastro} options={{headerShown: false}} />
        <Stack.Screen name='PedidoScreen' component={TelaPedidos} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TelaHomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <TouchableOpacity
        style = {styles.touchableArea} onPress={()=>{navigation.navigate('LoginScreen')}}>
        <ImageBackground
          style={styles.imagemBackground}
          source={background}>
            <Animatable.Image animation="flipInY" source={require('../LatteShop/assets/images/LogoBuyMeAMocha.png')} style={styles.containerLogo} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
    
  )
}

const TelaLogin = ({navigation}) => {
  return(
  <View style={styles.container}>
    <StatusBar backgroundColor="#000000" barStyle="light-content" />
    <ImageBackground
      style={styles.imagemBackground}
      source={FadedBackground}>
        <Animatable.Image animation="flipInY" source={require('../LatteShop/assets/images/LogoLoginCadastro.png')} style={styles.containerLogoLogin} />
        <Animatable.View animation="fadeInUp" style={styles.containerLogin}>
          <Text style={styles.textForm}>Login</Text>
          <TextInput style={styles.inputForms} placeholder='Digite seu login :)'></TextInput>
          <Text style={styles.textForm}>Senha</Text>
          <TextInput style={styles.inputForms} placeholder='Digite sua senha :)' secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.buttonLogin} onPress={()=>{navigation.navigate('PedidoScreen')}}>
            <Text style={styles.buttonTextLogin}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin} onPress={()=>{navigation.navigate('CadastroScreen')}}>
            <Text style={styles.buttonTextLogin}>Cadastre-se</Text>
          </TouchableOpacity>
        </Animatable.View>
    </ImageBackground>
  </View>
  )
}
const TelaCadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <ImageBackground 
        style={styles.imagemBackground}
        source={FadedBackground}>
          <Animatable.View animation="fadeInUp" style={styles.containerCadastro}>
            <Text>Qualquer Coisa</Text>
          </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const TelaPedidos = () => {
  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerLogo: {
    width: '100%',
    marginTop: '10%',
    resizeMode: 'contain'
  },

  containerLogoLogin: {
    resizeMode:'contain',
    width: '100%',
    flex: 1
  },

  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textForm: {
    color: '#000',
    fontSize: 25,
    marginTop: 15,
    fontWeight: '600'
  },

  inputForms: {
    color:'#000',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
    fontSize: 15
  },

  buttonLogin: {
    backgroundColor: '#000',
    width: '50%',
    borderRadius: 45,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonTextLogin: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  imagemBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  touchableArea: {
    flex: 1,
    height: '100%',
    width: '100%',
  }
});
