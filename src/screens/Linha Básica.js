import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, } from 'react-native';

import React, { useState } from 'react';


export function LinhaBasica() {


const [select, setSelected] = useState(0);
const [largura, LadoX] = useState("")
const [comp, LadoY] = useState("")
const [area1, Area] = useState("")


if (largura && comp && area1) {
  var calc1 = largura
  var calc2 = comp
  var D6 = Math.sqrt(area1)
  if ( largura <= 40 ) {
    calc1 = 2
  } else {
    calc1 = Math.ceil(largura / 35)
  }

  if ( comp <= 40 ) {
    calc2 = 2
  } else {
    calc2 = Math.ceil( comp / 35 )
  }
  console.log(calc1)
  console.log(calc2)

  var D7 = ( Math.sqrt(area1) / ( largura / 100 ))
  var D8 = ( Math.sqrt(area1) / ( comp / 100 ))
  var quantidade = parseInt((( D7 * calc1 ) * ( D8 - 1 )) + (( D8 * calc2 ) * ( D7 - 1 ))) + ' Espaçadores'
  
  } else {
  quantidade = 'Resultado'
}
return (
<View style={styles.containerCalc}>
<ScrollView showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

<View style={styles.bannerCalc}>
  <View style={{width: '60%', paddingLeft: 15, justifyContent: 'center' }}>
    <Text style={{fontWeight: '600', color: '#fff', fontSize: 16}}>Espaçador Nivelador Linha Básica</Text>
    <Text style={{color: '#fff', fontWeight:'300'}}>• Para cerâmicas e porcelanatos de 5 a 13 mm de espessura</Text>
    <Text style={{color: '#fff', fontWeight:'300'}}>• Ideal para revestimentos de até 90 x 90cm</Text>
  </View>
  <View style={{width: '40%', justifyContent: 'flex-end', alignItems: 'center'}}>
    <Image
      source={require('../../assets/clipBasico.png')}
      style={{ height: '90%', width: 100, marginRight: 20,}}
    />
  </View>
</View>

<Text style={{color: '#303030', fontSize: 30, fontWeight: 'bold', paddingTop: 30, textAlign: 'center'}}>Cálculo de Consumo</Text>
<Text style={{color: '#303030', textAlign: 'center', marginTop:10, paddingLeft: 10, paddingRight: 10, paddingBottom: 20,}}>Faça o cálculo da quantidade de Espaçadores necessária para sua obra</Text>
<TextInput value={largura} onChangeText={LadoX}  placeholder='Lado X (em CM)' keyboardType="numeric" style={styles.input} />
<TextInput value={comp} onChangeText={LadoY} placeholder='Lado Y (em CM)' keyboardType="numeric" style={styles.input} />
<TextInput value={area1} onChangeText={Area} placeholder='Area de Aplicação (em M²)' keyboardType="numeric" style={styles.input} />
<TextInput 
placeholder='Resultado'
value={quantidade}
editable={false}
style={styles.resultado}
/> 
<Text style={{color: '#303030', textAlign: 'center', }}>Observação: Como as Cunhas são reutilizáveis, sugerimos a quantidade de 300 a 400 peças por instalador</Text>

<View style={{ alignItems: 'center', paddingTop: 20,  }}>
          <Image
              source={require('../../assets/bumax.png')}
              style={{ height: 30, width: 130, }}
          /> 
        </View>
  </ScrollView>
<StatusBar style="auto" />
</View>
);

}
const styles = StyleSheet.create({
  containerCalc: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    },
banner: {
flexDirection: 'row',
height: 182,
borderRadius: 16,
backgroundColor: '#EA5B0C',
margin: 20,
shadowColor: '#303030'
},
bannerCalc: {
  flexDirection: 'row',
  height: 165,
  borderRadius: 10,
  backgroundColor: '#EA5B0C',
  marginBottom: 10,
  shadowColor: '#303030'
  },
input: {
width: '100%',
height: 40,
backgroundColor: '#EFEFEF',
borderRadius: 5,
marginBottom: 10,
paddingLeft: 20,
borderColor: '#ee7031',
borderWidth: 1,
},
resultado: {
width: '100%',
height: 40,
backgroundColor: '#FFF9AD',
borderRadius: 5,
marginBottom: 10,
paddingLeft: 20,
borderColor: '#ee7031',
borderWidth: 1,
fontWeight: 'bold',
color: '#606060',
},
styleLoginBtn: {
marginTop: 10,
marginLeft: 10,
marginRight: 20,
borderRadius: 6,
overflow: "hidden",
marginBottom: 10,
alignItems: 'flex-start'
},
});
