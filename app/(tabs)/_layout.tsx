import { View, Text, ImageBackground, Image } from 'react-native'
import { Tabs } from 'expo-router'

import {icons} from "@/constants/icons";
import {images} from "@/constants/images";

import "@/global.css";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' , headerShown: false, tabBarIcon: ({focused}) => (
        <>
          <ImageBackground source={images.highlight} className="flex flex-row w-full flex-1 min-w-[112px] mt-4 min-h-14 justify-center items-center rounded-full overflow-hidden">
            <Image source={icons.home} tintColor={"#151312"} className="size-5" />
            <Text>Home</Text>
          </ImageBackground>
        </>
      ) }} />
      <Tabs.Screen name="search" options={{ title: 'Search' , headerShown: false }} />
      <Tabs.Screen name="Saved" options={{ title: 'Saved' , headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' , headerShown: false }} />
    </Tabs>
  )
}

export default _layout