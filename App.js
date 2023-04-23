import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import { Avatar, Button } from 'react-native-paper';
import FaltaScreen from './view/faltaScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import LoginScreen from './view/loginScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

/**
 * 
 * @returns Retorna as telas Notas e Faltas com um Tab.Navigator
 */
function BarraTelas() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator initialRouteName='Notas'>
      <Tab.Screen name='Notas' component={NotaScreen} options={{
        headerTitleAlign: 'center', headerLeft: () =>
          <TouchableOpacity onPress={() => { navigation.navigate('Perfil') }}>
            <Avatar.Text label='TT' size={38} />
          </TouchableOpacity>,
        headerLeftContainerStyle: { paddingLeft: 5 },
        headerRightContainerStyle: { paddingRight: 5 },
        headerRight: () =>
          <Button onPress={() => { navigation.navigate('Login') }}> LOGIN </Button>,
        tabBarIcon: ({ focused, color, size }) =>
          (<Icon name={focused ? 'trophy' : 'trophy-outline'} color={color} size={size} />)
      }}
      />
      <Tab.Screen name='Faltas' component={FaltaScreen} options={{
        headerTitleAlign: 'center', headerLeft: () =>
          <TouchableOpacity onPress={() => { navigation.navigate('Perfil') }}>
            <Avatar.Text label='TT' size={38} />
          </TouchableOpacity>,
        headerLeftContainerStyle: { paddingLeft: 5 },
        headerRightContainerStyle: { paddingRight: 5 },
        tabBarIcon: ({ focused, color, size }) =>
        (<Icon name={focused ? 'close-circle' : 'close-circle-outline'} color={color}
          size={size} />)
      }} />
    </Tab.Navigator>
  )
}

/**
 * 
 * @returns Retorna a aplicação utilizando um NavigationContainer e Stack.Navigator
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen name='Principal' component={BarraTelas}
          options={{ headerShown: false }} />
        <Stack.Screen name='Perfil' component={UserScreen} />
        <Stack.Screen name='Login' component={LoginScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}