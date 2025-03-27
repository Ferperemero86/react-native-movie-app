import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-5xl">Movie app</Text>
       <Link href="/onboarding">Onboarding</Link>
       <Link href="/movies/avengers">Avenger Movie</Link>
    </View>
  );
}
