import React from "react";
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView, Pressable } from 'react-native';




export function Pastilha() {
return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never">
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Nivelador Autoadesivo para Pastilha</Text>
                    <Image
                        source={require('../../assets/pastilhas1.png')}
                        style={{ height: 250, width: 250, }}
                    />
                    <Text style={{ textAlign: 'justify', marginTop: -20, }}>O nivelador autoadesivo Bumax facilita o processo de instalação das pastilhas pois oferece maior rigidez e sustentação às placas. Utilizando o nivelador o instalador reduz o tempo de assentamento e garante um ótimo resultado final.</Text>
                </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
                        source={require('../../assets/pastilhas3.jpg')}
                        style={{ height: 175, width: '50%', }}
                    />
            <Image
                        source={require('../../assets/pastilhas2.jpg')}
                        style={{ height: 175, width: '50%', }}
                    />
            </View>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Vantagens</Text>
            <Text style={{ textAlign: 'justify', }}>• Maior rigidez e sustentação à placa de pastilha;</Text>
            <Text style={{ textAlign: 'justify', }}>• Facilidade de manuseio e agilidade na instalação das placas;</Text>
            <Text style={{ textAlign: 'justify', }}>• Auxilia no nivelamento entre pastilhas e outros revestimentos;</Text>
            <Text style={{ textAlign: 'justify', }}>• Autoadesivo: colagem simples e rápida;</Text>
            <Text style={{ textAlign: 'justify', }}>• Pode ser recortado se necessário.</Text>
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
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+autoadesivo+para+pastilhas&app_absent=0"
                            );
                            } else {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+nivelador+autoadesivo+para+pastilhas&app_absent=0"
                            );
                            }
                        })
                        }>Saber Mais
                    </Text>
                </Pressable >
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar:</Text>
            <View>
                <Image
                    source={require('../../assets/pastilhas4.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>1º Remova o papel protetor do verso do Nivelador.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/pastilhas5.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>2º Sobre o verso da pastilha, posicione e alinhe o nivelador com o lado autoadesivo para baixo.</Text>            
            </View>     
            <View>
                <Image
                    source={require('../../assets/pastilhas6.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>3º Após posicionado, pressione o nivelador contra a pastilha para realizar a colagem.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/pastilhas7.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>4º Pronto! Instale as pastilhas de forma fácil e ágil.</Text>            
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