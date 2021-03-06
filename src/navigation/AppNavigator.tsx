import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screens/detailScreen/DetailsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import FormScreen from "../screens/formScreen/FormScreen";

export type AppStackParamList = {
    FormScreen: undefined,
    DetailScreen: { symbol: ISymbol };
    NotFoundScreen: undefined
};
const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    return <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen
                name="FormScreen"
                component={FormScreen}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="NotFoundScreen"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </AppStack.Navigator>
    </NavigationContainer>;
};

export default AppNavigator;
