import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <Ionicons name="info-circle" size={32} color="green" />
            );
          },
        }}
      >
        <Stack.Screen
          name="Portfolio"
          component={MainScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
