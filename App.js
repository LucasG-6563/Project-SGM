import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import { Avatar } from 'react-native-paper';
import FaltaScreen from './view/faltaScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function BarraTelas() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Notas' component={NotaScreen} options={{
        headerTitleAlign: 'center', headerLeft: () =>
          <TouchableOpacity onPress={() => { navigation.navigate('Perfil') }}>
            <Avatar.Text label='TT' size={38} />
          </TouchableOpacity>,
        headerLeftContainerStyle: { marginLeft: 10 },
        headerRightContainerStyle: { marginRight: 10 }
      }}
      />
      <Tab.Screen name='Faltas' component={FaltaScreen} options={{
        headerTitleAlign: 'center', headerLeft: () =>
          <TouchableOpacity onPress={() => { navigation.navigate('Perfil') }}>
            <Avatar.Text label='TT' size={38} />
          </TouchableOpacity>,
        headerLeftContainerStyle: { marginLeft: 10 },
        headerRightContainerStyle: { marginRight: 10 }
      }} />
    </Tab.Navigator>
  )
}

/*
<Tab.Navigator>
      <Tab.Screen name='Notas' component={NotaScreen} options={{ headerTitleAlign: 'center' }} />
      <Tab.Screen name='Faltas' component={FaltaScreen} options={{ headerTitleAlign: 'center' }} />
      <Tab.Screen name='Usuário' component={UserScreen} options={{ headerTitleAlign: 'center', tabBarIcon: () => <Avatar.Text label='TT' size={28} /> }} />
    </Tab.Navigator>
*/

/**
 * 
 * @returns Retorna a aplicação utilizando um NavigationContainer e Tab.Navigator
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen name='Principal' component={BarraTelas}
          options={{ headerShown: false }} />
        <Stack.Screen name='Perfil' component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}