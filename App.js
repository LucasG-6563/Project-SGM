import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import TestHeader from './control/HeaderScreens';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="notaScreen" component={NotaScreen} options={{header: TestHeader}}/>
        <Stack.Screen name="userScreen" component={UserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}