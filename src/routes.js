import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Pagina1 } from './pages/Pagina1';
import { Pagina2 } from './pages/Pagina2';
import { Pagina3 } from './pages/Pagina3';

const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}  options={{ headerShown: false  }}  />          
            <Stack.Screen name='pagina1' component={Pagina1}  options={{ headerShown: false  }}  />          
            <Stack.Screen name='pagina2' component={Pagina2}  options={{ headerShown: false  }}  />
            <Stack.Screen name='pagina3' component={Pagina3}  options={{ headerShown: false  }}  />     
        </Stack.Navigator>
    );
}
//     