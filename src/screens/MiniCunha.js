import React from "react";
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, ScrollView, Pressable , } from 'react-native';


export function MiniCunha() {
return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Mini Cunha</Text>
                    <Image
                        source={require('../../assets/minicunha1.png')}
                        style={{ height: 250, width: 250, }}
                    />
                </View>
                <Text style={{ textAlign: 'justify', marginTop: -20, }}>A Mini Cunha Multiuso Bumax é ideal para ajuste de rodapés, espaçamento de pisos e revestimentos, meia esquadria, calço para ajustes de altura e outros.</Text>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Diferenciais</Text>
                
            <Text style={{ textAlign: 'justify', }}>• Desenvolvida com frisos na base para mais aderência durante o uso e curvatura para o manuseio se tornar mais confortável.</Text>
            <Text style={{ textAlign: 'justify', }}>• Comercializada em pacotes com 250 peças, a Mini Cunha Bumax já está disponível para compra nos canais de vendas Bumax e em lojas parceiras.</Text>
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
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+mini+cunha&app_absent=0"
                        );
                        } else {
                        return Linking.openURL(
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+mini+cunha&app_absent=0"
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
            marginBottom: 30,
        },
    })