import UserScreen from './view/userScreen';
import NotaScreen from './view/notaScreen';
import TestHeader from './control/HeaderScreens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function App() {
  return (
    //<UserScreen />
    <SafeAreaProvider>
      <TestHeader/>
      <NotaScreen />
    </SafeAreaProvider>
  );
}