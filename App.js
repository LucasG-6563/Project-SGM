import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import TestHeader from './control/HeaderScreens';
import FaltaScreen from './view/faltaScreen';
import BarraNavigation from './control/barraNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen name="notaScreen" component={NotaScreen} options={{header: TestHeader}}/>
        <Stack.Screen name="userScreen" component={UserScreen} options={{headerTitleAlign: 'center', headerTitle: 'Usuário'}}/>
        <Stack.Screen name="faltaScreen" component={FaltaScreen} options={{headerTitleAlign: 'center', headerTitle: 'Faltas'}}/>
  </Stack.Navigator>*/}
   <Tab.Navigator> 
  <Tab.Screen name='Notas' component={NotaScreen} options={{header: TestHeader}}/>
  <Tab.Screen name='Faltas' component={FaltaScreen} options={{headerTitleAlign: 'center', headerTitle: 'Faltas'}}/>
  <Tab.Screen name='userScreen' component={UserScreen} options={{headerTitleAlign: 'center', headerTitle: 'Usuário'}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}