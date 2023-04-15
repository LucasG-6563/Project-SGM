import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import { Avatar } from 'react-native-paper';
import FaltaScreen from './view/faltaScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

/**
 * 
 * @returns Retorna a aplicação utilizando um NavigationContainer e Tab.Navigator
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Notas' component={NotaScreen} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name='Faltas' component={FaltaScreen} options={{ headerTitleAlign: 'center' }} />
        <Tab.Screen name='Usuário' component={UserScreen} options={{ headerTitleAlign: 'center', tabBarIcon: () => <Avatar.Text label='TT' size={28} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}