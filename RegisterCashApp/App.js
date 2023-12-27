import { NavigationContainer } from '@react-navigation/native';
import RegisterBalanceScreen from './Components/Screens/RegisterBalanceScreen';
import DefaultRegisterScreen from './Components/Screens/DefaultRegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfoScreen from './Components/Screens/InfoScreen';
import { AppProvider } from './Context/AppContext';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createBottomTabNavigator();


export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="home"
            component={RegisterBalanceScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Default"
            component={DefaultRegisterScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cash-outline" size={size} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle-outline" size={size} color={color} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
