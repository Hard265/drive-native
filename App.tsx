import {
    DefaultTheme,
    NavigationContainer,
    Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScren from "expo-splash-screen";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./screens/Home";
import SignIn from "./screens/auth/SignIn";
import authStore from "./stores/auth";
import colors from "./theme/colors";
import Register from "./screens/auth/Register";

const RootStack = createNativeStackNavigator();

SplashScren.preventAutoHideAsync();
SplashScren.setOptions({
    fade: true,
    duration: 1000,
});

export default observer(() => {
    const colorScheme = useColorScheme();
    const [fontsLoaded, fontsError] = useFonts({
        "NeueMontreal-Bold": require("./assets/fonts/neue-montreal/NeueMontreal-Bold.otf"),
        "NeueMontreal-Medium": require("./assets/fonts/neue-montreal/NeueMontreal-Medium.otf"),
        "NeueMontreal-Regular": require("./assets/fonts/neue-montreal/NeueMontreal-Regular.otf"),
        "Roobert-Black": require("./assets/fonts/roobert/RoobertBlack.otf"),
        "Roobert-Bold": require("./assets/fonts/roobert/RoobertBold.otf"),
        "Roobert-Medium": require("./assets/fonts/roobert/RoobertMedium.otf"),
        "Roobert-Regular": require("./assets/fonts/roobert/RoobertRegular.otf"),
    });
    const isDark = colorScheme === "dark";

    const theme: Theme = {
        ...DefaultTheme,
        dark: isDark,
        colors: {
            ...DefaultTheme.colors,
            primary: colors.violet[600],
            border: colors.gray[300],
            background: isDark ? colors.black : colors.white,
            text: isDark ? colors.white : colors.black,
        },
        fonts: {
            heavy: { ...DefaultTheme.fonts.heavy, fontFamily: "Roobert-Black" },
            bold: {
                ...DefaultTheme.fonts.bold,
                fontFamily: "NeueMontreal-Bold",
            },
            medium: {
                ...DefaultTheme.fonts.medium,
                fontFamily: "NeueMontreal-Medium",
            },
            regular: {
                ...DefaultTheme.fonts.regular,
                fontFamily: "NeueMontreal-Regular",
            },
        },
    };

    React.useEffect(() => {
        if (fontsLoaded && !fontsError && !authStore.isLoading) {
            SplashScren.hide();
        }
    }, [fontsLoaded, fontsError, authStore.isLoading]);

    if (!fontsLoaded || fontsError || authStore.isLoading) return null;
    return (
        <GestureHandlerRootView>
            <NavigationContainer theme={theme}>
                <RootStack.Navigator
                    initialRouteName={
                        authStore.isAuthenticated ? "Home" : "SignIn"
                    }
                >
                    {authStore.isAuthenticated ? (
                        <RootStack.Group>
                            <RootStack.Screen name="Home" component={Home} />
                        </RootStack.Group>
                    ) : (
                        <RootStack.Group screenOptions={{ headerTitle: '', headerShadowVisible: false, headerTitleStyle: { fontFamily: "Roobert-Bold" } }}>
                            <RootStack.Screen
                                name="SignIn"
                                component={SignIn}
                            />
                            <RootStack.Screen
                                name="Register"
                                component={Register}
                            />
                        </RootStack.Group>
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
});
