import React, {useEffect} from 'react';
import { View, Image, BackHandler, TouchableOpacity, Text } from 'react-native';

export function ScreenA({ navigation }) {
      


    // Navegação
    function openScreen(){
        navigation.navigate('ScreenB')
    }

    // Desativação do botão voltar do Android
    // OBS: Impede que o usuário volte para a pagina Home após o término do loading
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        return true
      })
    }, [])

  // Código da tela de Login
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2', justifyContent: 'center', paddingHorizontal: 20,}}>
    
    <View style={{ alignItems: 'center', marginVertical: 100,}}>
    <Image
            source={require('../../assets/bumax.png')}
            style={{ height: 50, width: 200, justifyContent: 'center'}}
          />
    </View>
    <Text style={{ textAlign: 'center', fontWeight: '200', fontSize: 13, marginTop: 30,}}> Ao clicar em entrar, você concorda com os nossos termos.</Text>
    <Text style={{ textAlign: 'center', fontWeight: '200', fontSize: 13, marginBottom: 5,}}> Saiba como processamos seus dados em nossa Política de Privacidade e Política de Cookies.</Text>
    {/* Botão Login com o Google */}
    <TouchableOpacity
    style={{ backgroundColor: '#fff', height: 50, borderRadius: 25, flexDirection:'row', alignItems: 'center',  marginVertical: 5,}}

    >
    <Image
            source={require('../../assets/google.png')}
            style={{ height: 25, width: 25, marginLeft: 15,}}
          />
    <Text style={{ color: '#303030', marginLeft: 50, fontWeight: '500'}}> ENTRAR COM O GOOGLE</Text>
    </TouchableOpacity>
    {/* Fim Botão Login com o Google */}

    {/* Botão Login com o Facebook */}
    <TouchableOpacity
    style={{ backgroundColor: '#fff', height: 50, borderRadius: 25, flexDirection:'row', alignItems: 'center', marginVertical: 5,}}
        onPress={openScreen}
    >
    <Image
            source={require('../../assets/facebook.png')}
            style={{ height: 25, width: 25, marginLeft: 15,}}
          />
    <Text style={{ color: '#303030', marginLeft: 50, fontWeight: '500'}}> ENTRAR COM O FACEBOOK</Text>
    </TouchableOpacity>
    {/* Fim Botão Login com o Facebook */}
    </View>
  );
}