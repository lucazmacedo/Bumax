import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Linking, Pressable} from 'react-native';


export function Espuma() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{alignItems: 'center',}}>
                <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Bloco de Espuma Multiuso</Text>
                <Image
                    source={require('../../assets/espuma1.png')}
                    style={{ height: 250, width: 250, }}
                />
                </View>
                <Text style={{ textAlign: 'justify', marginTop: -20, }}>O bloco de espuma multiuso Bumax possui maciez e resistência, sendo indispensável para o acabamento pós-rejunte.</Text>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Indicado para:</Text>
            <Text style={{ textAlign: 'justify', }}>• Limpeza em geral;</Text>
            <Text style={{ textAlign: 'justify', }}>• Acabamento pós-rejunte;</Text>
            <Text style={{ textAlign: 'justify', }}>• Remover excessos no rejuntamento;</Text>
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
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+bloco+de+espuma+multiuso&app_absent=0"
                        );
                        } else {
                        return Linking.openURL(
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+bloco+de+espuma+multiuso&app_absent=0"
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
        },
    })