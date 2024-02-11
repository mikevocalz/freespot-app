import "../global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { memo, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from "react-native";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default memo(function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    ...Entypo.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View className='items-center justify-center' style={StyleSheet.absoluteFill}>
        <StatusBar style="dark" animated />
        <ActivityIndicator size="large" color={'red'} />
      </View>
    )
  }

  return (
    <Provider>
      <RootLayoutNav />
    </Provider>
  )

});

function RootLayoutNav() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="dark" animated />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </View>
  );
}