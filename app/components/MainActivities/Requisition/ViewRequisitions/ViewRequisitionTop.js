import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window')
class ViewRequisitionTop extends React.Component {
    render() {
        return (
            <View >
                <View style={styles.InfoContainer}>
                    <Image source={require('../../../../../assets/ppct.png')} />
                    <View>
                        <Text style={[styles.text,{fontFamily:'ptsans-regular'}]}>XYZ Properties {'\n'} 1,medical road ikeja,{'\n'} ikeja,
                        Lagos, 110001{'\n'} Nigeria +2348026847945,
                                    +2347035925697{'\n'} www.propertycloudtech.xyz</Text>
                        <Text style={[styles.text,{fontWeight:'bold',fontFamily:'ptsans-regular'}]}>Payment Voucher</Text>
                        <Text style={[styles.text,{fontWeight:'bold', fontFamily:'ptsans-regular'}]}> #R-21 <Text style={[styles.paymentInfoHeaderText,{color:'#F50A0A',}]}>Pending</Text></Text>
                    </View>
                </View>
                <View>
                    <View style={styles.paymentInfo}>
                        <Text style={styles.paymentInfoHeaderText}>Paid To</Text>
                        <Text style={[styles.paymentInfoHeaderText, { textAlign: "right" }]}>Amount</Text>
                    </View>
                    <View>
                        <View style={styles.paymentInfo}>
                            <Text style={[styles.paymentInfoItemText,{fontFamily:'ptsans-regular'}]}>
                                Ololade MmaduabuGod{'\n'}
                                t: 08031975415{'\n'}
                                e: demo@example.com
                            </Text>
                            <Text style={[styles.paymentInfoItemText, {fontFamily:'ptsans-regular', textAlign: 'right' }]}>
                                N250,000.00{'\n'}
                                <Text style={[styles.paymentInfoHeaderText, {fontFamily:'ptsans-regular'}]}>
                                    Total Amount Paid{'\n'}
                                </Text>
                                N250,000.00
                            </Text>
                        </View>

                    </View>
                    <View style={styles.paymentInfo}>
                        <Text style={[styles.paymentInfoItemText, {fontFamily:'ptsans-regular', alignSelf:'flex-end'}]}>Payment for</Text>
                        <Text style={[styles.paymentInfoHeaderText, {fontFamily:'ptsans-regular', textAlign:'right'}]}>
                            Date{'\n'}
                            <Text style={[styles.paymentInfoItemText, {fontFamily:'ptsans-regular'}]}>01/11/2019</Text>{'\n'}
                            Due Date{'\n'}
                            <Text style={[styles.paymentInfoItemText,{fontFamily:'ptsans-regular'}]}>01/11/2019</Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    InfoContainer: {
        alignItems: "center",
        height: 40 / 100 * height,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    text: {
        textAlign: "center",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
    },
    paymentInfo: {
        flexDirection: "row",
        alignSelf: "center",
        width: 89 / 100 * width,
    },
    paymentInfoHeaderText: {
        width: "50%",
        paddingTop: 5,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 18,
    },
    paymentInfoItemText: {
        width: '50%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
    }

})
export default ViewRequisitionTop;