// import { Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback, useState } from "react";

// SplashScreen.preventAutoHideAsync();

// // export const unstable_settings = {
// //   // Ensure any route can link back to `/`
// //   initialRouteName: "home",
// // };

// const Layout = () => {
// //   const [fontsLoaded] = useFonts({
// //     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
// //     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
// //     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
// //   });

//     const [userToken, setUserToken] = useState('')


//     const onLayoutRootView = useCallback(async () => {
//         try {
//             let token = await SecureStore.getItemAsync('userToken');
//             setUserToken(token)
//         } catch (error) {
            
//         }
//     }, []);

// //   if(!userToken) return null;

//   return <Stack onLayout={onLayoutRootView}/>
// };

// export default Layout;

import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
