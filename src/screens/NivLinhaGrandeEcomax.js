import React from "react";
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView, Pressable   } from 'react-native';

export function NivLinhaGrandeEcomax() {

return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never">
                <View style={{alignItems: 'center',}}>
                <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Espaçador Nivelador Linha Grande Ecomax</Text>
                    <Image
                        source={require('../../assets/clipGrandeEcomax2.png')}
                        style={{ height: 180, width: 180, }}
                    />
                    <View style={{paddingRight: 10,}}>
                            <Text>• Para cerâmicas e porcelanatos de 6 a 14 mm de espessura;</Text>
                            <Text>• Ideal para revestimentos de pequenos, médios e grandes formatos;</Text>
                            <Text>• Espaçamentos: 1 mm | 1,5 mm | 2 mm;</Text>
                    </View>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Cunha Niveladora Linha Grande</Text>
                    <Image
                        source={require('../../assets/cunhaLG.png')}
                        style={{  height: 180, width: 180, marginRight: 10, }}
                    />
                    <View style={{paddingLeft: 10,}}>
                        <Text>• Cunha Larga;</Text>
                        <Text>• Com apoio para alicate;</Text>
                        <Text>• Método de instalação: Alicate;</Text>
                        <Text>• Com ponteira para espaçamentos: 1,0 mm  |  2,0 mm  |  3,0 mm |  5,0 mm.</Text>
                    </View>
                </View>
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
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+de+pisos+linha+grande+ecomax&app_absent=0"
                            );
                            } else {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+de+pisos+linha+grande+ecomax&app_absent=0"
                            );
                            }
                        })
                        }>Saber Mais
                    </Text>
                </Pressable >
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar</Text>
            <View>
                <Image
                    source={require('../../assets/linhagrande1.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>1º Aplique a quantidade de argamassa conforme a indicação do fabricante do revestimento. Posicione o piso e remova os excessos das laterais. Adicione dois ou mais Espaçadores Niveladores por lado, a cerca de 5 cm de cada extremidade dos pisos.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/linhagrande2.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>2º Assente o próximo revestimento e encaixe as Cunhas na abertura do Espaçador Nivelador. Utilize o Alicate Nivelador Bumax para inserir a pressão necessária para o nivelamento.</Text>            
            </View>     
            <View>
                <Image
                    source={require('../../assets/linhagrande4.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>3º Aguarde a argamassa secar e rompa as peças batendo lateralmente com martelo de borracha ou sapato de E.P.I.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/linhagrande3.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>4º Após e remoção, descarte os Espaçadores Niveladores quebrados e recolha as Cunhas para futuras utilizações.</Text>            
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