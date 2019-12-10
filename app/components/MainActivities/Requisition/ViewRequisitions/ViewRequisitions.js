import React from 'react';
import { View, Image, Text,  ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import FooterNav from '../../../public/FooterNav/index';
import styles from './styles';
import Header from '../../../public/Header/index';
import * as Font from 'expo-font';
import ViewRequisitionTop from './ViewRequisitionTop';


const { width, height } = Dimensions.get('window')

class ViewRequisitions extends React.Component {
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
            'ptsans-regular': require('../../../../../assets/fonts/PTSans-Regular.ttf'),
            'redhattext-bold': require('../../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                    <Header title="Requisitions" openSideBar={this.props.navigation} />
                <ScrollView style={{ height: 75 / 100 * height }}>
                    <View style={{ alignItems: "center", height: '100%' }}>
                           <ViewRequisitionTop />
                        <View style={styles.detailsHeader}>
                            <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '30%' }]}>Dept.</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "center", fontFamily: 'ptsans-bold', width: '30%' }]}>Item</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "right", fontFamily: 'ptsans-bold', width: '30%' }]}>Balance</Text>
                        </View>

                        <View style={[styles.detailsBody, { height: 10 / 100 * height }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Administrations</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { textAlign: "center", fontFamily: 'ptsans-bold' }]}>Ikeja Car Fuel</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>250,000.00</Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '45%' }]}>Desc.</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: 'right', fontFamily: 'ptsans-bold', width: '45%' }]}>Total     </Text>
                        </View>
                        <View style={[styles.detailsBody, { backgroundColor: '#fff', }]}>
                            <View style={[styles.detailsBodyLeft, { width: '45%' }]}>
                                <Text
                                    style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>
                                    Fuel For the Total Tour Movement for Aji Xpo 2019
                                 </Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Visitation</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>19/11/2019</Text>
                            </View>

                            <View style={[styles.detailsBodyRight, { width: '45%' }]}>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>N250,000.00</Text>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>Refunds</Text>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}> + N 0</Text>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>Balance Due</Text>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>  N 0</Text>
                            </View>
                        </View>

                        <View style={styles.detailsHeader}>
                            <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '30%' }]}>Req. Date</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "center", fontFamily: 'ptsans-bold', width: '30%' }]}>User</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "right", fontFamily: 'ptsans-bold', width: '30%' }]}>Appr. Date</Text>
                        </View>
                        <View style={[styles.detailsBody, { height: 10 / 100 * height }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>01/11/2019 19:37:03</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { textAlign: "center", fontFamily: 'ptsans-bold' }]}>Abayomi Ola</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>01/11/2019 19:37:03</Text>
                            </View>
                        </View>
                        <View style={[styles.detailsBody, { height: 10 / 100 * height }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>01/11/2019 19:37:03</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { textAlign: "center", fontFamily: 'ptsans-bold' }]}>XYZ Properties</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>01/11/2019 19:37:03</Text>
                            </View>
                        </View>
                        <View style={styles.detailsHeader}>
                            <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '30%' }]}>Disb. Date</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "center", fontFamily: 'ptsans-bold', width: '30%' }]}>Amount</Text>
                            <Text style={[styles.detailsheaderText, { textAlign: "right", fontFamily: 'ptsans-bold', width: '30%' }]}>Disb’s Name</Text>
                        </View>
                        <View style={[styles.detailsBody, { height: 10 / 100 * height }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>01/11/2019 19:37:03</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { textAlign: "center", fontFamily: 'ptsans-bold' }]}>N 250,000.00</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { textAlign: "right", fontFamily: 'ptsans-bold' }]}>XYZ Properties</Text>
                            </View>
                        </View>
                    </View >
                </ScrollView>

                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>

            </View>
        )
    }
}
export default ViewRequisitions;