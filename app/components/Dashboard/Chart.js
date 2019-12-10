import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './style';
import * as Font from 'expo-font';
import { LineChart } from 'react-native-chart-kit'

const { width, height } = Dimensions.get("window");
const Chart = (props) => {
    const line = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [ Math.random() * 100,  Math.random() * 100,  Math.random() * 100,  Math.random() * 100,
                    Math.random() * 100,  Math.random() * 100],
                strokeWidth: 2, // optional
            },
        ],
    }
    return (
        <View style={styles.chartCon}>
            <Text style={[styles.chartTitle,{fontFamily:'ptsans-bold'}]}>Revenue</Text>
            <View style={styles.chartInfoCon}>
                <View style={styles.chartInfo}>
                    <Text style={[styles.chartText,{fontFamily:'ptsans-bold'}]}>Current Week</Text>
                    <Text style={[styles.chartPeriod,{color: '#F50A0A',fontFamily:'ptsans-bold'}]}>N6,000,000.00</Text>
                </View>
                <View style={styles.chartInfo}>
                    <Text style={[styles.chartText, { textAlign: "right", fontFamily:'ptsans-bold' }]}>Previous Week</Text>
                    <Text style={[styles.chartPeriod, { textAlign: "right",fontFamily:'ptsans-bold' }]}>N10,000,000.00</Text>
                </View>
            </View>


            <View style={{alignSelf:"center"}}>
                <LineChart
                    data={{
                        labels: line.labels,
                        datasets: line.datasets,
                    }}
                    width={86/100*width} // from react-native
                    height={220}
                    yAxisLabel={"#"}
                    yAxisSuffix={"M"}
                    chartConfig={{
                        backgroundColor: "#04304B",
                        backgroundGradientFrom: "#04304B",
                        backgroundGradientTo: "#04304B",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 5
                    }}
                />
            </View>
            <Text style={[styles.chartTitle,{fontFamily:'ptsans-bold'}]}>Total Inventory</Text>
            <Text style={[styles.chartTotal, {fontFamily:'ptsans-bold', textAlign:"center"}]}>N 1,290,051,306.67</Text>
        </View>
    )
}
export default Chart