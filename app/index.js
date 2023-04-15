import { View } from "react-native";
import { Link, Stack } from "expo-router";
import { Home, About, Login, Signup, Help } from "../component";
import { useState } from "react";

export default function Index() {

    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Use the `Screen` component to configure the layout. */}
        <Stack.Screen 
            options={{ 
                headerStyle: { backgroundColor: "#F3F4F8" },
                headerShadowVisible: false,
                // headerLeft: () => (
                //     <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                // ),
                // headerRight: () => (
                //     <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                // ),
                headerTitle: "Seat Planner",
            }} 
        />
        {
            isSignedIn ? (
                <Home />
            ) : (
                <Login />
            )
        }
        </View>
    );
}