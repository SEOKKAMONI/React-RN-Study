import react, { useEffect, useState } from 'react';
import * as Location from "expo-location"
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, Dimensions, ActivityIndicator } from 'react-native-web';
import { Fontisto } from '@expo/vector-icons'

// AIzaSyDm7Acp7tm_hfWjOTwUw33abNMaprgxcGU

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// 사용자가 쓰는 디바이스 가로의 길이를 가져와줌

const API_KEY = "38b048ff72f8696e679fd95ee17259f7";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
}


export default function App() {
  // view 는 기본적으로 Flex Container 
  // Flex Direction의 기본값은 Column

  // 레이아웃을 짤때는 폰마다 크기가 다르기에 width, height로 px을 주어서 짜는것이 아닌
  // flex 로 비율을 준다
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false })
    setCity(location[0].city);
    const response = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await response.json();
    setDays(json.daily)
  }

  useEffect(() => {
    getWeather();
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
        showsVerticalScrollIndicator={false} // 스크롤시 생기는 스크롤바를 없애주는 props
      >

        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, index) => {
            <View key={index} style={styles.day}>
              <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between"
                  }}>
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" style={{marginRight: 50}} />
              </View>

              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          })
        )}

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
  },
  tinyText: {
    fontSize: 20,
  }
});
