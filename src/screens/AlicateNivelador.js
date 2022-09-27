import React from 'react';
import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Pressable , ScrollView  } from 'react-native';


export function AlicateNivelador() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false}
            overScrollMode="never">
                <View style={{alignItems: 'center',}}>
                    <Text style={{ paddingTop: 30, fontSize: 22, fontWeight: '600', color: '#303030', textAlign: 'center'}}>Alicate Nivelador</Text>
                    <Image
                        source={require('../../assets/alicate1.jpg')}
                        style={{ height: 250, width: 250, }}
                    />
                </View>
                <Text style={{ textAlign: 'justify', marginTop: -20, }}>O Alicate Nivelador é utilizado para intensificar a pressão aplicada sobre o conjunto  Cunha + Espaçador durante o processo de nivelamento.</Text>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight: '600', color: '#303030',}}>Como utilizar:</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/alicate2.jpg')}
                        style={{ height: 250, width: 250, }}
                    />
                </View>
            <Text style={{ textAlign: 'justify', paddingTop: 10, }}>• Com os Espaçadores Niveladores + Cunhas já posicionados, ajuste o Alicate:</Text>
            <Text style={{ textAlign: 'justify', }}>• O parafuso “B” regula a peça móvel que determina a distância entre o Espaçador e o final da Cunha (lado mais alto)</Text>
            <Text style={{ textAlign: 'justify', }}>• O parafuso “A” regula a pressão que será aplicada sobre o conjunto Cunha + Espaçador.</Text>
            <Text style={{ textAlign: 'justify', }}>Obs: Defina o ajuste ideal nas primeiras utilizações para que a pressão não seja excessiva e rompa os Espaçadores.</Text>
            <Text style={{ textAlign: 'justify', paddingTop: 10, }}>Depois de ajustado o alicate nos primeiros conjuntos de Espaçadores + Cunhas mantenha a mesma regulagem nos conjuntos seguintes para que o processo de nivelamento seja uniforme do início ao fim.</Text>
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
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+alicate+nivelador&app_absent=0"
                        );
                        } else {
                        return Linking.openURL(
                            "https://api.whatsapp.com/send/?phone=5547997610124&text=+Ol%C3%A1%21+Estou+acessando+o+aplicativo+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+alicate+nivelador&app_absent=0"
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