import React, {useEffect} from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, BackHandler, Pressable } from 'react-native';

export function ScreenB({ navigation }) {

  function LinhaBasica(){
    navigation.navigate('Cálculo Linha Básica')
}
function LinhaGrande(){
  navigation.navigate('Cálculo Linha Grande')
}

function LinhaMarmores(){
  navigation.navigate('Cálculo Linha Mármores e Granitos')
}
function Bumax(){
  navigation.navigate('Sobre nós')
}

// OBS: Impede que o usuário volte para a pagina Home após o término do loading
useEffect(() => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    return true
  })
}, [])

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <ScrollView showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={styles.header}>
          <Text style={{ paddingLeft: 30, fontSize: 30, fontWeight: 'bold', color: '#303030'}}>Seja bem-vindo!</Text>
      </View>
      {/* Banner */}
      <Pressable  style={styles.banner} onPress={Bumax}>
        <View style={{width: '55%', paddingLeft: 20, justifyContent: 'center' }}>
          <Text style={{fontWeight: '600', color: '#fff', fontSize: 20}}>Somos a Bumax</Text>
          <Text style={{color: '#fff', fontWeight:'300'}}>Sediada na cidade de Joinville/SC, a BUMAX está presente em todo o Brasil nas melhores redes de lojas do país.</Text>
          <Text style={{fontWeight: '600', color: '#fff', fontSize: 12, paddingTop: 10,}}>Saiba mais</Text>
        </View>
        <View style={{width: '35%', justifyContent: 'flex-end', alignItems: 'center'}}>
          <Image
            source={require('../../assets/gustavo.png')}
            style={{ height: '115%', width: 195, marginLeft: 50,}}
          />
        </View>
      </Pressable >
      {/* End Banner */}
      {/* Calculadora */}
      
      <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 20, fontWeight: '600', color: '#303030'}}>Cálculo de consumo</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never"
      style={{ paddingTop: 10, paddingHorizontal: 10, maxHeight: 260, }}>
        
      
        <Pressable  style={styles.Shadow} onPress={LinhaBasica} >
              <Image
                source={require('../../assets/clipBasico.png')}
                style={{ height: 160, width: 100, }}
                />
              <Text style={styles.textoCalc }>Linha Básica</Text>
              <Text style={styles.acessar}>Acessar</Text>
        </Pressable >
        
        <Pressable  style={styles.Shadow} onPress={LinhaGrande} >
              <Image
                source={require('../../assets/clipGrande.png')}
                style={{ height: 170, width: 120, }}
              />
             <Text style={ styles.textoCalc}>Linha Grande</Text>
             <Text style={styles.acessar}>Acessar</Text>
        </Pressable >
        

        <Pressable  style={styles.Shadow} onPress={LinhaMarmores} >
              <Image
                source={require('../../assets/clipMarmores.png')}
                style={{ height: 130, width: 100, }}
              />
            <Text style={styles.textoCalc}>Mármores e Granitos</Text>
            <Text style={styles.acessar}>Acessar</Text>
        </Pressable >
        </ScrollView>

        <View style={{ alignItems: 'center', paddingTop: 20,  }}>
          <Image
              source={require('../../assets/bumax.png')}
              style={{ height: 30, width: 130, }}
          /> 
        </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  header: {
    paddingTop: 50,
  },
  banner: {
    flexDirection: 'row',
    height: 182,
    borderRadius: 16,
    backgroundColor: '#EA5B0C',
    margin: 20,
  },
  Shadow: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight:10,
    marginLeft: 10,
    height: 230,
    width: 180,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  acessar: {
    paddingLeft: 15,
    paddingBottom: 20,
    paddingRight: 10,
    fontWeight: '300',
    color: '#303030',
  },
  textoCalc: {
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#303030',
    textAlign: 'center'
  },
});
