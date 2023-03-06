import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar, View } from 'react-native';
import TabBar from "./src/components/TabBar/TabBar";
import { APP_ROUTES_NAMES } from "./src/routes/routesName";
import StatusBarGeneral from './src/components/StatusBar/StatusBarBackground'
const stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    // Sem fontes por enquanto
  })

  return (
    <View style={{ flex: 1 }}>

      <StatusBarGeneral backgroundColor="black" barStyle="light-content" />
      <NavigationContainer theme={theme}>
        <TabBar />

      </NavigationContainer>
    </View>
  );
}
export default App;

