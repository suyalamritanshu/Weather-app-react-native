import React from 'react'
import { View, ScrollView, Image} from 'react-native'

const WeatherScroll = () => {
  return (
    <ScrollView>

    </ScrollView>
  )
}

const currentTempleEl = () =>{
    const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
    return (
        <View>
<Image source={img}  />
<View>
    <Text>Sunday</Text>
    <Text>Night - 28&#176</Text>
    <Text>Day - 35&#176</Text>
</View>
        </View>
    )
}

export default WeatherScroll