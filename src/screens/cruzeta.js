import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable , ScrollView, Linking  } from 'react-native';


export function EspacadorCruzeta({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            endFillColor="#000"
            overScrollMode="never">
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Espaçador Cruzeta</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../../assets/cruzeta6.png')}
                            style={{ height: 150, width: 250, marginVertical: 15, }}
                        />
                    </View>
                    </View>
                    <Text style={{ textAlign: 'justify',  }}>Os Espaçadores de Piso “Cruzeta” são ideais para espaçar e alinhar revestimentos diversos com mais facilidade e economia de tempo.</Text>
                    <Text style={{ textAlign: 'justify', }}>Diferente dos outros, os Espaçadores Bumax não precisam ser removidos após o assentamento dos pisos, tendo em vista que são brancos e permitem inclusive passar rejuntes de cores claras.</Text>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Vantagens:</Text>
            <Text style={{ textAlign: 'justify', }}>• Não precisa remover;</Text>
            <Text style={{ textAlign: 'justify', }}>• Revestimentos 100% alinhados;</Text>
            <Text style={{ textAlign: 'justify', }}>• Fácil de usar;</Text>
            <Text style={{ textAlign: 'justify', }}>• Economia de tempo da obra;</Text>
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
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+produto&app_absent=0"
                            );
                            } else {
                            return Linking.openURL(
                                "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+produto&app_absent=0"
                            );
                            }
                        })
                        }>Saber Mais
                    </Text>
                </Pressable >
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar:</Text>
            <View>
                <Image
                    source={require('../../assets/cruzeta2.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>1º Ao aplicar o revestimento, adicione pelo menos 1 espaçador a cada canto do piso.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/cruzeta3.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
                />
                <Text style={styles.textUso}>2º Faça isso sucessivamente até completar a aplicação do revestimento.</Text>            
            </View>     
            <View>
                <Image
                    source={require('../../assets/cruzeta4.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>3º Ao concluir, verifique o alinhamento por completo.</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/cruzeta5.jpg')}
                    style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
                />
                <Text style={styles.textUso}>4º Aguarde a massa curar, retire apenas os espaçadores na vertical e então parta para o rejuntamento.</Text>            
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