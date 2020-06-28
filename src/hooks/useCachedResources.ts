import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "AvenirNextLTPro-Bold": require("../../assets/fonts/AvenirNextLTPro-Bold.otf"),
          "AvenirNextLTPro-It": require("../../assets/fonts/AvenirNextLTPro-It.otf"),
          "AvenirNextLTPro-Regular": require("../../assets/fonts/AvenirNextLTPro-Regular.otf"),
          "Roboto": require("native-base/Fonts/Roboto.ttf"),
          "Roboto_medium": require("native-base/Fonts/Roboto_medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}