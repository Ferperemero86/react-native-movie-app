import { Text, View, Image, ScrollView, ScrollViewComponent, ActivityIndicator, FlatList } from "react-native";

import { Link } from 'expo-router';
import { useRouter } from "expo-router";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(() => fetchMovies(
  {
    query: ''
  }
));


  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={images.bg} 
        className="absolute w-full z-0" />

      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}>

        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        { moviesLoading ? 
          (<ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center" />) : moviesError ?
            (<Text>Error: {moviesError?.message}</Text>) : (
              <View className="flex-1 px-5">
                <SearchBar placeholder="Search movie" onPress={() => router.push("/search")} />

                <View className="mt-10 w-full">
                  <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

                  <FlatList 
                    data={movies}
                    renderItem={({ item }) => (
                      <MovieCard 
                        {...item}
                      />
                    )} 
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ 
                      justifyContent: "flex-start",
                      gap: 20,
                      marginBottom: 5,
                      paddingRight: 10,
                    }}
                    className="mt-2 pb-32"
                    scrollEnabled={false}
                    />
                    
                </View>
              </View>
            )
        }
      </ScrollView>
    </View>
  );
}
