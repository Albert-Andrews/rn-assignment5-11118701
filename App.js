import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Components/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
