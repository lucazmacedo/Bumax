import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bumax } from '../screens/Bumax';
import { LinhaBasica } from '../screens/Linha Básica';
import { LinhaGrande } from '../screens/Linha Grande';
import { LinhaMarmores } from '../screens/Linha Mármores';

const { Screen, Navigator } = createNativeStackNavigator();

import { Loading } from '../screens/Loading';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { EspacadorCruzeta } from '../screens/cruzeta'
import { NivLinhaBasica } from '../screens/NivLinhaBasica'
import { NivLinhaGrande } from '../screens/NivLinhaGrande'
import { ProtetorEspacador } from '../screens/ProtetorEspaçador';
import { MiniCunha } from '../screens/MiniCunha';
import { AlicateNivelador } from '../screens/AlicateNivelador';
import { Espatula } from '../screens/Espatula';
import { Joelheira } from '../screens/Joelheira';
import { Espuma } from '../screens/Espuma';
import { Pastilha } from '../screens/Pastilha';
import { BlocoDeVidro } from '../screens/BlocoDeVidro';
import { NivLinhaBasicaEcomax } from '../screens/NivLinhaBasicaEcomax';
import { NivLinhaGrandeEcomax } from '../screens/NivLinhaGrandeEcomax';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
            name='Loading'
            component={Loading}
            options={{ headerShown: false}}
            />
            <Screen 
            name='ScreenA'
            component={ScreenA}
            options={{ 
                headerShown: false,
                // Desativação do gesto 'Voltar' do Iphone
                // OBS: Impede que o usuário volte para a pagina Home após o término do loading inicial
            }}

            />
            <Screen 
            name='ScreenB'
            component={ScreenB}
            options={{ 
                headerShown: false,
                // Desativação do gesto 'Voltar' do Iphone
                // OBS: Impede que o usuário volte para a pagina Home após o término do loading inicial
            }}
            />
            <Screen 
            name='Cálculo Linha Básica'
            component={LinhaBasica}
            />
            <Screen 
            name='Cálculo Linha Grande'
            component={LinhaGrande}
            />
            <Screen 
            name='Cálculo Linha Mármores e Granitos'
            component={LinhaMarmores}
            />
            <Screen 
            name='Sobre nós'
            component={Bumax}
            />
            <Screen 
            name='Espaçador Cruzeta'
            component={EspacadorCruzeta}
            />
            <Screen 
            name='Nivelador Linha Básica'
            component={NivLinhaBasica}
            />
            <Screen 
            name='Nivelador Linha Grande'
            component={NivLinhaGrande}
            />
            <Screen 
            name='Protetor Espaçador'
            component={ProtetorEspacador}
            />
            <Screen 
            name='Mini Cunha Multiuso'
            component={MiniCunha}
            />  
            <Screen 
            name='Alicate Nivelador'
            component={AlicateNivelador}
            />  
            <Screen 
            name='Espátula para Rejunte'
            component={Espatula}
            />  
            <Screen 
            name='Joelheira Multiuso'
            component={Joelheira}
            /> 
            <Screen 
            name='Bloco de Espuma Multiuso'
            component={Espuma}
            /> 
            <Screen 
            name='Nivelador Autoadesivo para Pastilhas'
            component={Pastilha}
            /> 
            <Screen 
            name='Espaçador para Bloco de Vidro'
            component={BlocoDeVidro}
            /> 
            <Screen 
            name='Nivelador Linha Básica Ecomax'
            component={NivLinhaBasicaEcomax}
            /> 
            <Screen 
            name='Nivelador Linha Grande Ecomax'
            component={NivLinhaGrandeEcomax}
            /> 
        </Navigator>
    )
}