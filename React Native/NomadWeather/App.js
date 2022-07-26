import react from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  // view 는 기본적으로 Flex Container 
  // Flex Direction의 기본값은 Column

  // 레이아웃을 짤때는 폰마다 크기가 다르기에 width, height로 px을 주어서 짜는것이 아닌
  // flex 로 비율을 준다

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
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
    fontSize: 68,
    fontWeight: "500"
  },  
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
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
