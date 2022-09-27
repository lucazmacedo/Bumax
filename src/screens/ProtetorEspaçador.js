import React from "react";
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView, Pressable   } from 'react-native';

export function ProtetorEspacador() {
return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Protetor Espaçador Multifuncional</Text>
                    <Image
                        source={require('../../assets/protetor1.jpg')}
                        style={{ height: 250, width: 250, }}
                    />
                </View>
                <Text style={{ textAlign: 'justify', marginTop: -20, }}>O Protetor Espaçador foi desenvolvido para espaçar, escorar, proteger revestimentos delicados e atribuir o espaço necessário para nivelar revestimentos tipo “Slim”.</Text>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Diferenciais</Text>
                
            <Text style={{ textAlign: 'justify', }}>• Fabricado para proteger revestimentos delicados de eventuais riscos causados pela cunha niveladora;</Text>
            <Text style={{ textAlign: 'justify', }}>• Mini Cunha destacável para espaçar e escorar revestimentos;</Text>
            <Text style={{ textAlign: 'justify', }}>• Espaçador de 1,0 | 2,0 | 3,0mm;</Text>
            <Text style={{ textAlign: 'justify', }}>• A peça proporciona altura necessária para nivelar revestimentos tipo “SLIM”.</Text>
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
            </ScrollView>
        </View>
    
          );
        }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#f7f7f7',
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'center',
            },
        buttonWP: {
            flexDirection: 'row',
            backgroundColor: '#25D366',
            width: '100%',
            marginTop: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
        },
    })