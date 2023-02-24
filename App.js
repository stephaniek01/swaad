import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";

import CategoryScreen from "./screens/CategoryScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

//  the createNativeStackNavigator gives
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#777",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#eee" },

        drawerContentStyle: { backgroundColor: "#777" },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#ddd",
      }}
    >
      <Drawer.Screen
        name="AllCategories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          {/* by default the first component is the initial screen, initialRouteName is used to explicitly set the initial screen */}
          <Stack.Navigator
            initialRouteName="MealsCategories"
            // Screen options sets the default for all screens
            screenOptions={{
              headerStyle: {
                backgroundColor: "#777",
              },
              headerTintColor: "#fff",
              contentStyle: "#eee",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
