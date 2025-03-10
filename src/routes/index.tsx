import { useTheme } from 'native-base';
import { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { OneSignal, NotificationWillDisplayEvent, OSNotification } from "react-native-onesignal"

import { AppRoutes } from './app.routes';
import { Notification } from '../components/Notification';

const linking = {
  prefixes: ["igniteshoes://", "exp+igniteshoes://"],
  config: {
    screens: {
      details: {
        path: "/details/:productId",
        parse: {
          productId: (productId: string) => productId,
        }
      },
      cart: {
        path: "/cart",
      }
    }
  }
}

export function Routes() {
  const { colors } = useTheme();

  const [notification, setNotification] = useState<OSNotification>();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
      const handleNotification = (event: NotificationWillDisplayEvent) => {
        event.preventDefault()
        const response = event.getNotification()
        console.log(response)
        setNotification(response)
      }

      OneSignal.Notifications.addEventListener("foregroundWillDisplay", handleNotification)

      return () => OneSignal.Notifications.removeEventListener("foregroundWillDisplay", handleNotification)
  }, [])

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />

      {notification?.title && <Notification data={notification} onClose={() => setNotification(undefined)}/>}
    </NavigationContainer>
  );
}