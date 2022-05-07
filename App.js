import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
const img = require('./assets/image.png')
import DateTime from './components/DateTime';
import FutureForecast from './components/FutureForecast';
import WeatherScroll from './components/WeatherScroll';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>

        <DateTime />
        <WeatherScroll />

        <FutureForecast />
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { flex: 1, resize: "cover", justifyContent: "center" }
});
