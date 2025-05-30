import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import EnterNumberScreen from './src/screens/EnterNumberScreen';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SelectLocationScreen from './src/screens/SelectLocationScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import BeveragesScreen from './src/screens/BeveragesScreen';
import SearchScreen from './src/screens/SearchScreen'; // Explore
import FilterScreen from './src/screens/FilterScreen'; // Filter screen

// Dummy tab screens
const CartScreen = () => <Text style={{ padding: 20 }}>Cart Screen</Text>;
const FavouriteScreen = () => <Text style={{ padding: 20 }}>Favourite Screen</Text>;
const AccountScreen = () => <Text style={{ padding: 20 }}>Account Screen</Text>;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Shop') iconName = 'home-outline';
          else if (route.name === 'Explore') iconName = 'search-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Favourite') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#28a745',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="EnterNumber" component={EnterNumberScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}