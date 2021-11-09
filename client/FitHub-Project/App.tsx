import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { BottomTabNavigator } from "./navigation";


export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <SafeAreaProvider>
        < Navigation colorScheme={colorScheme} />
        <StatusBar /> 
         </SafeAreaProvider>
    
    );
  }
} 
