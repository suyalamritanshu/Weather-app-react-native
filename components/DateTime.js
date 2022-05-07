import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WeatherItem = ({ title, value, unit }) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemtitle}>{title}</Text>
            <Text style={styles.weatherItemtitle}>{value}{unit}</Text>

        </View>
    )
}

const DateTime = () => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>12:30AM</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>Monday, June 7</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value="45" unit="%" />
                    <WeatherItem title="Humidity" value="45" unit="%" />
                    <WeatherItem title="Humidity" value="45" unit="%" />
                    <WeatherItem title="Humidity" value="45" unit="%" />
                    <WeatherItem title="Humidity" value="45" unit="%" />

                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>Asia/Kolkata</Text>
                <Text style={styles.latlong}>343432</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },

    heading: {
        fontSize: 45,
        color: "white",
        fontWeight: "100"
    },
    subheading: {
        fontSize: 25,
        color: "#eee",
        fontWeight: 300
    },
    rightAlign: {
        textAlign: 'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 20,
        color: 'white'
    },
    latlong: {
        fontSize1: 16,
        color: 'white',
        fontWeight: '200'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemtitle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "100",
    },
 

})

export default DateTime