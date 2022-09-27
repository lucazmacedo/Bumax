import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable , ScrollView, TouchableOpacity  } from 'react-native';

export function Bumax({ navigation }) {

    function EspacadorCruzeta(){
        navigation.navigate('Espaçador Cruzeta')
      }
    function NivLinhaBasica(){
        navigation.navigate('Nivelador Linha Básica')
      }
      function NivLinhaGrande(){
        navigation.navigate('Nivelador Linha Grande')
      }
      function ProtetorEspacador(){
        navigation.navigate('Protetor Espaçador')
      }
      function MiniCunha(){
        navigation.navigate('Mini Cunha Multiuso')
      }
      function AlicateNivelador(){
        navigation.navigate('Alicate Nivelador')
      }
      function Espatula(){
        navigation.navigate('Espátula para Rejunte')
      }
      function Joelheira(){
        navigation.navigate('Joelheira Multiuso')
      }
      function Espuma(){
        navigation.navigate('Bloco de Espuma Multiuso')
      }
      function Pastilha(){
        navigation.navigate('Nivelador Autoadesivo para Pastilhas')
      }
      function BlocoDeVidro(){
        navigation.navigate('Espaçador para Bloco de Vidro')
      }
      function NivLinhaGrandeEcomax(){
        navigation.navigate('Nivelador Linha Grande Ecomax')
      }
      function NivLinhaBasicaEcomax(){
        navigation.navigate('Nivelador Linha Básica Ecomax')
      }
 

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}
        endFillColor="#000"
        overScrollMode="never">
            
            <View style={styles.container2}>
                    
                    <Text style={{paddingLeft: 20, paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Nossos produtos</Text>
                    <ScrollView horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ paddingTop: 10, paddingHorizontal: 10, maxHeight: 230, }}
                                endFillColor="#000"
                                overScrollMode="never">
                            {/* Linha Básica */}
                            <Pressable  style={styles.Shadow} onPress={NivLinhaBasica}>
                                <Image
                                    source={require('../../assets/espacadorLB.jpg')}
                                    style={{ height: 130, width: 100, }}
                                    />
                                <Text style={styles.textoCalc}>Espaçador Linha Básica</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            <Pressable  style={styles.Shadow} onPress={NivLinhaBasicaEcomax}>
                                <Image
                                    source={require('../../assets/clipBasicoEcomax.png')}
                                    style={{ height: 130, width: 100, }}
                                    />
                                <Text style={styles.textoCalc}>Espaçador Linha Básica Ecomax</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            <Pressable  style={styles.Shadow} onPress={NivLinhaBasica}>
                                <Image
                                    source={require('../../assets/cunhaLB.jpg')}
                                    style={{ height: 130, width: 120, }}
                                    />
                                <Text style={styles.textoCalc}>Cunha Linha Básica</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Linha Grande */}
                            <Pressable  style={styles.Shadow} onPress={NivLinhaGrande}>
                                <Image
                                    source={require('../../assets/clipGrande.png')}
                                    style={{ height: 130, width: 100,}}
                                    />
                                <Text style={styles.textoCalc}>Espaçador Linha Grande</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            <Pressable  style={styles.Shadow} onPress={NivLinhaGrandeEcomax}>
                                <Image
                                    source={require('../../assets/clipGrandeEcomax.png')}
                                    style={{ height: 130, width: 140, }}
                                    />
                                <Text style={styles.textoCalc }>Espaçador Linha Grande Ecomax</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            <Pressable  style={styles.Shadow} onPress={NivLinhaGrande}>
                                <Image
                                    source={require('../../assets/cunhaLG.jpg')}
                                    style={{ height: 150, width: 140, }}
                                    />
                                <Text style={styles.textoCalc }>Cunha Linha Grande</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Cruzeta */}
                            <Pressable  style={styles.Shadow} onPress={EspacadorCruzeta}>
                                <Image
                                    source={require('../../assets/cruzeta.jpg')}
                                    style={{ height: 150, width: 100, }}
                                    />
                                <Text style={styles.textoCalc }>Espaçador Cruzeta</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Protetor Espaçador */}
                            <Pressable  style={styles.Shadow} onPress={ProtetorEspacador}>
                                <Image
                                    source={require('../../assets/protetor.jpg')}
                                    style={{ height: 150, width: 100, }}
                                    />
                                <Text style={styles.textoCalc }>Protetor Espaçador</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Mini Cunha */}
                            <Pressable  style={styles.Shadow} onPress={MiniCunha}>
                                <Image
                                    source={require('../../assets/minicunha.jpg')}
                                    style={{ height: 150, width: 100, }}
                                    />
                                <Text style={styles.textoCalc }>Mini cunha Multiuso</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Alicate */}
                            <Pressable  style={styles.Shadow} onPress={AlicateNivelador}>
                                <Image
                                    source={require('../../assets/alicate.jpg')}
                                    style={{ height: 150, width: 100, }}
                                    />
                                <Text style={styles.textoCalc }>Alicate Nivelador</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Espátula */}
                            <Pressable  style={styles.Shadow} onPress={Espatula}>
                                <Image
                                    source={require('../../assets/espatula.jpg')}
                                    style={{ height: 150, width: 160, }}
                                    />
                                <Text style={styles.textoCalc }>Espátula para Rejuste</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Joelheira */}
                            <Pressable  style={styles.Shadow} onPress={Joelheira} >
                                <Image
                                    source={require('../../assets/joelheira.jpg')}
                                    style={{ height: 150, width: 100, }}
                                    />
                                <Text style={styles.textoCalc }>Joelheira Multiuso</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Bloco de Espuma */}
                            <Pressable  style={styles.Shadow} onPress={Espuma}>
                                <Image
                                    source={require('../../assets/espuma.jpg')}
                                    style={{ height: 150, width: 150, }}
                                    />
                                <Text style={styles.textoCalc }>Bloco de Espuma Multiuso</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Pastilhas */}
                            <Pressable  style={styles.Shadow} onPress={Pastilha}>
                                <Image
                                    source={require('../../assets/pastilhas.jpg')}
                                    style={{ height: 130, width: 130, }}
                                    />
                                <Text style={styles.textoCalc }>Nivelador para Pastilhas</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                            {/* Bloco de Vidro */}
                            <Pressable  style={styles.Shadow}onPress={BlocoDeVidro}>
                                <Image
                                    source={require('../../assets/blocodevidro.jpg')}
                                    style={{ height: 150, width: 150, }}
                                    />
                                <Text style={styles.textoCalc }>Espaçador para Bloco de Vidro</Text>
                                <Text style={styles.acessar}>Acessar</Text>
                            </Pressable >
                    
                    </ScrollView>

                    <Text style={{paddingLeft: 20, paddingTop: 20, fontSize: 20, fontWeight: '600', color: '#fff', backgroundColor: '#ea5b0c'}}>Empresas que inovam conosco</Text>
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        endFillColor="#000"
                        overScrollMode="never"
                        style={{ paddingTop: 10, paddingHorizontal: 10, maxHeight: 240, backgroundColor: '#ea5b0c' }}>
                            
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/leroy.jpg')}
                                    style={{ height: 70, width: 150, }}
                                    />
                            </View>
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/tumelero.jpg')}
                                    style={{ height: 70, width: 150, }}
                                    />
                            </View>
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/abc.jpg')}
                                    style={{ height: 70, width: 150, }}
                                    />
                            </View>
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/amoedo.jpg')}
                                    style={{ height: 70, width: 180, }}
                                    />
                            </View>
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/casas.jpg')}
                                    style={{ height: 70, width: 150, }}
                                    />
                            </View>
                            <View style={styles.Shadow1} >
                                <Image
                                    source={require('../../assets/center.jpg')}
                                    style={{ height: 70, width: 150, }}
                                    />
                            </View>
                    </ScrollView>
                    <Text style={{paddingLeft: 20, paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>FeedBack</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                                style={{ paddingTop: 10, paddingHorizontal: 10, marginBottom: 20, }}
                                endFillColor="#000"
                                overScrollMode="never">
                            
                            <View style={styles.Shadow2} >
                            <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: '500', color: '#303030',}}>França Revestimentos</Text>
                                <Text style={{marginHorizontal: 20, marginBottom: 10,}}>Com os niveladores da Bumax eu tenho um acabamento de excelência, serviço com qualidade garantida, valorizando o material aplicado, minha mão de obra e acima de tudo a satisfação do cliente.</Text>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20, }}>
                                    <Image
                                        source={require('../../assets/franca.png')}
                                        style={{ height: 60, width: 60,}}
                                        />
                                    <Text style={{ paddingLeft: 10,}}>Profissional Azulejista</Text>
                                </View>
                            </View>
                            <View style={styles.Shadow2} >
                            <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: '500', color: '#303030',}}>Gustavo F. Silva</Text>
                                <Text style={{marginHorizontal: 20, marginBottom: 10,}}>Excelente material para execução de trabalhos em azulejos e porcelanatos, recomendo sempre a marca. Ela facilita a instalação de pisos até mesmo para iniciantes que não estão confiantes ainda na execução.</Text>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20, }}>
                                    <Image
                                        source={require('../../assets/gustavofsilva.png')}
                                        style={{ height: 60, width: 60,}}
                                        />
                                    <Text style={{ paddingLeft: 10,}}>Profissional Azulejista</Text>
                                </View>
                            </View>
                            <View style={styles.Shadow2} >
                            <Text style={{paddingLeft: 20, fontSize: 15, fontWeight: '500', color: '#303030',}}>Andreolla Mat. de Construção</Text>
                                <Text style={{marginHorizontal: 20, marginBottom: 10,}}>É um produto de ótima qualidade, as vendas desse produto aumentaram depois que troquei por essa marca, ainda mais por começar a vender da linha grande também, que antes não tínhamos.</Text>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20, }}>
                                    <Image
                                        source={require('../../assets/andreolla.jpg')}
                                        style={{ height: 60, width: 60,}}
                                        />
                                    <Text style={{ paddingLeft: 10,}}>Lojista</Text>
                                </View>
                            </View>
                    </ScrollView>
            </View>
        </ScrollView>
    </View>

      );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        },
    container2: {
        backgroundColor: '#f7f7f7',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        },
        Shadow: {
            alignItems: 'center',
            backgroundColor: '#fff',
            marginRight:10,
            marginLeft: 10,
            marginBottom: 20,
            height: 200,
            width: 180,
            borderRadius: 10,
            justifyContent: 'center',
          },
          Shadow1: {
            alignItems: 'center',
            backgroundColor: '#fff',
            marginRight:10,
            marginLeft: 10,
            marginBottom: 20,
            height: 80,
            width: 180,
            borderRadius: 10,
            justifyContent: 'center',
          },
          Shadow2: {
            alignItems: 'flex-start',
            backgroundColor: '#fff',
            marginRight:10,
            marginLeft: 10,
            height: 250,
            width: 300,
            borderRadius: 10,
            justifyContent: 'center',
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
            fontSize: 15,
            fontWeight: '600',
            color: '#303030',
            textAlign: 'center'
          },

})