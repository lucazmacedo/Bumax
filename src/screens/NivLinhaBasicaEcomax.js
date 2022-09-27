import React from "react";
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Linking   } from 'react-native';


export function NivLinhaBasicaEcomax() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
                        endFillColor="#000"
                        overScrollMode="never">
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Espaçador Nivelador Linha Básica Ecomax</Text>
                    <Image
                        source={require('../../assets/clipBasicoEcomax.png')}
                        style={{ height: 160, width: 130, marginTop: 10, }}
                    />
                    <View style={{paddingRight: 10,}}>
                            <Text style={{ textAlign: 'justify', }}>• Para cerâmicas e porcelanatos de 5 a 13 mm de espessura;</Text>
                            <Text style={{ textAlign: 'justify', }}>• Ideal para revestimentos de pequenos e médios formatos de até 70x70cm;</Text>
                            <Text style={{ textAlign: 'justify', }}>• Espaçamentos:  1,0 mm  |  1,5 mm  |  2,0 mm  |  3,0 mm.;</Text>
                    </View>
                    
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Cunha Niveladora Linha Básica</Text>
                    <Image
                        source={require('../../assets/cunhaLB.png')}
                        style={{  height: 180, width: 180, marginRight: 10, }}
                    />
                        
                        <View style={{paddingLeft: 10,}}>
                            <Text style={{ textAlign: 'justify', }}>• Cunha Estreita;</Text>
                            <Text style={{ textAlign: 'justify', }}>• Aplicação mais confortável;</Text>
                            <Text style={{ textAlign: 'justify', }}>• Com ponteira para espaçamentos: 1,0 mm  |  2,0 mm  |  3,0 mm.</Text>
                        </View>
                </View>
                <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Vantagens</Text>
                <Text style={{ textAlign: 'justify', }}>Qualidade: Nivelamento e acabamento perfeito do seu revestimento;</Text>
                <Text style={{ textAlign: 'justify', }}>Agilidade: O conjunto dispensa o uso do Alicate Nivelador, tornando o serviço mais rápido e eficiente.;</Text>
                <Text style={{ textAlign: 'justify', }}>Economia: O Espaçador Nivelador translúcido e com ponto de ruptura garante que não fique rebarbas na remoção, evitando custos com retrabalhos.</Text>
            
                <Pressable  style={styles.buttonWP}>
                <Image
                        source={require('../../assets/whatsapp.png')}
                        style={{ height: 20, width: 20,  }}
                    />
                    <Text
                            style={{color: '#fff', paddingVertical: 10, paddingLeft: 10, fontWeight: '500', fontSize: 16,}}
                            onPress={() =>
                                Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                            if (supported) {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+de+pisos+linha+basica&app_absent=0"
                            );
                            } else {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+de+pisos+linha+basica&app_absent=0"
                            );
                            }
                        })
                        }>Saber Mais
                    </Text>
                </Pressable >
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar</Text>
            <View>
                <Image
                    source={require('../../assets/linhabasica1.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>1º Adicione um Nivelador Espaçador a aproximadamente 5 cm de cada extremidade dos pisos.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/linhabasica2.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>2º Assente o próximo revestimento e então encaixe as Cunhas na abertura do Espaçador Nivelador. (O uso de Alicate é opcional).</Text>            
            </View>     
            <View>
                <Image
                    source={require('../../assets/linhabasica3.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>3º Após a secagem da argamassa, rompa as peças batendo lateralmente com martelo de borracha ou botina.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/linhabasica4.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>4º Após remoção , descarte os Niveladores Espaçadores quebrados e recolha as Cunhas para futuras utilizações.</Text>            
            </View>
        </ScrollView>
        </View>
    
          );
        }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#f7f7f7',
            flex: 1,
            paddingHorizontal: 20,
            },
        buttonWP: {
            flexDirection: 'row',
            backgroundColor: '#25D366',
            width: '100%',
            marginTop: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            },
            textUso: {
                textAlign: 'justify',
                paddingHorizontal: 5,
                paddingBottom: 20, 
                paddingTop: 5,
            },
    })