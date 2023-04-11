import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import TestHeader from './control/HeaderScreens';
import FaltaScreen from './view/faltaScreen';
import BarraNavigation from './control/barraNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

/**
 * 
 * @returns Retorna um pilha de Navegação para a tela NotaScreen
 */
function NotaStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="notaScreen" component={NotaScreen} options={{header: TestHeader}}/>
      <Stack.Screen name="userScreen" component={UserScreen} options={{headerTitleAlign: 'center', headerTitle: 'Usuário'}}/>
    </Stack.Navigator>
  )
}

/**
 * 
 * @returns Retorna um pilha de Navegação para a tela FaltaScreen
 */
function FaltaStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="faltaScreen" component={FaltaScreen} options={{headerTitleAlign: 'center', headerTitle: 'Faltas', header: TestHeader}}/>
      <Stack.Screen name="userScreen" component={UserScreen} options={{headerTitleAlign: 'center', headerTitle: 'Usuário'}}/>
    </Stack.Navigator>
  )
}

/**
 * 
 * @returns Retorna a aplicação utilizando um NavigationContainer e Tab.Navigator
 */
export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen name="notaScreen" component={NotaScreen} options={{header: TestHeader}}/>
        <Stack.Screen name="userScreen" component={UserScreen} options={{headerTitleAlign: 'center', headerTitle: 'Usuário'}}/>
        <Stack.Screen name="faltaScreen" component={FaltaScreen} options={{headerTitleAlign: 'center', headerTitle: 'Faltas'}}/>
  </Stack.Navigator>*/}
   <Tab.Navigator> 
  <Tab.Screen name='Notas' component={NotaStackScreen}/>
  <Tab.Screen name='Faltas' component={FaltaStackScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}