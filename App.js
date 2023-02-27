import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import Home from "./src/screens/Home/Home";
import TabBar from "./src/components/TabBar/TabBar";
import { APP_ROUTES_NAMES} from "./src/routes/routesName" ;
import StatusBarBackground
 from "./src/components/StatusBar/StatusBarBackground";
const stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    // Sem fontes por enquanto
  })

  return (
    <NavigationContainer theme={theme}>
      <StatusBarBackground/>
      <TabBar/>
      
    </NavigationContainer>
  );
}
export default App;

