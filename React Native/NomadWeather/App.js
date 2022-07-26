import react, { useEffect, useState } from 'react';
import * as Location from "expo-location"
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, Dimensions} from 'react-native-web';

// AIzaSyDm7Acp7tm_hfWjOTwUw33abNMaprgxcGU

const { width:SCREEN_WIDTH } = Dimensions.get("window"); 
// 사용자가 쓰는 디바이스 가로의 길이를 가져와줌

export default function App() {
  // view 는 기본적으로 Flex Container 
  // Flex Direction의 기본값은 Column

  // 레이아웃을 짤때는 폰마다 크기가 다르기에 width, height로 px을 주어서 짜는것이 아닌
  // flex 로 비율을 준다
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:false})
    setCity(location[0].city);
  }

  useEffect(() => {
    ask();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
        pagingEnabled // 가로 스크롤을 좀더 끈끈하게 해주는 props
        horizontal // 스크롤뷰를 가로로 설정하는 props
        contentContainerStyle={styles.weather}
        showsVerticalScrollIndicator = {false} // 스크롤시 생기는 스크롤바를 없애주는 props
      >

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500"
  },  
  weather: {
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,

  },
  description: {
    marginTop: -30,
    fontSize: 60,
  }
});
