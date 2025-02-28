import { NativeBaseProvider } from 'native-base';
import { StatusBar, Platform } from 'react-native';
import { OneSignal } from "react-native-onesignal"
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

const oneSignalAppId = Platform.OS === "ios" ? "ecde6911-7beb-40ba-b001-ba812db9ae66" : "d5faaff9-1400-491c-bf5a-b9438f9d246d"

OneSignal.initialize(oneSignalAppId)
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}