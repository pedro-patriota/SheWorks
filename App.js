import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./src/screens/Home/Home";
import { StatusBar, SafeAreaView }  from 'react-native';
import TabBar from "./src/components/TabBar/TabBar";
import { APP_ROUTES_NAMES } from "./src/routes/routesName";
import StatusBarBackground
from "./src/components/StatusBar/StatusBarBackground";

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
    <SafeAreaView style={{flex: 1}}>

      <StatusBar
        animated={true} 
        barStyle={'light-content'}
        backgroundColor="#000000"
       />
      <NavigationContainer theme={theme}>
        <StatusBarBackground />
        <TabBar />

      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;

