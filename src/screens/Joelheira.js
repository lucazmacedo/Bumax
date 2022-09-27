import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView, Pressable   } from 'react-native';


export function Joelheira() {

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator={false}
        endFillColor="#000"
        overScrollMode="never"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={{alignItems: 'center',}}>
            <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Joelheira Multiuso – Fixa Fácil</Text>
            <Image
                source={require('../../assets/joelheira1.png')}
                style={{ height: 250, width: 250, }}
            />
            <Text style={{ textAlign: 'justify', marginTop: -20, }}>A Joelheira Bumax é diferente de todas as outras que existem no mercado. É a única com o sistema fixa fácil, que dispensa a cinta de aperto, ou seja, é fixada na roupa por prendedores, tornando a utilização muito mais confortável.</Text>
            </View>
        <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Saúde e conforto andam juntos</Text>
        <Text style={{ textAlign: 'justify', }}>• Produzida em borracha de E.V.A., é macia e ergonômica: amortece o impacto e não risca superfícies delicadas, como o porcelanato.</Text>
        <Text style={{ textAlign: 'justify', }}>• Tamanho único: ajustável a necessidade do usuário.</Text>
        <Text style={{ textAlign: 'justify', }}>• Para quem está sempre em movimento, as Joelheiras Bumax trarão maior produtividade, aliviando o cansaço e o mais importante, preservando a saúde!</Text>
        <Text style={{ textAlign: 'justify', }}>• Proteção em diversos serviços como: instalação de pisos, obras em geral, jardinagem, mecânica, marcenaria, limpeza, pintura e muito mais.</Text>
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
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+joelheira+multiuso&app_absent=0"
                        );
                        } else {
                        return Linking.openURL(
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+joelheira+multiuso&app_absent=0"
                        );
                        }
                    })
                    }>Saber Mais
                </Text>
            </Pressable >
        <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar:</Text>
        <View>
            <Image
                source={require('../../assets/joelheira3.jpg')}
                style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
            />
            <Text style={styles.textUso}>1º Levante a trava do prendedor e posicione a joelheira.</Text>
        </View>
        <View>
            <Image
                source={require('../../assets/joelheira4.jpg')}
                style={{ width: '100%', borderRadius: 5, marginTop: 10, paddingHorizontal: 10, }}
            />
            <Text style={styles.textUso}>2º Puxe o tecido lateral da calça para dentro da abertura do prendedor e feche a trava para fixar..</Text>
        </View>     
        <View>
            <Image
                source={require('../../assets/joelheira2.jpg')}
                style={{ width: '100%', borderRadius: 5, marginTop: 10, }}
            />
            <Text style={styles.textUso}>3º Pronto! Repita o procedimento
no segundo prendedor.</Text>
        </View>      
        <Text style={{ textAlign: 'justify', marginTop: 5, paddingBottom: 20,  }}>Atenção: Os prendedores são fixados em tecido, por isso é necessário o uso de calça durante a execução do trabalho.</Text>
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
        paddingHorizontal: 10,
        paddingBottom: 20, 
        paddingTop: 10,
    },
})