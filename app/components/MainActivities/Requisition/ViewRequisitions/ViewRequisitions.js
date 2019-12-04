import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FooterNav from '../../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get('window')

class ViewRequisitions extends React.Component {
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Requisitions</Text>
                </View>
                <View style={{ alignItems: "center", height: 70 / 100 * height }}>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Dept.</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Item</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Balance</Text>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={styles.detailsBody}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Administrations</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Ikeja Car Fuel</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>250,000.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.3%' }]}>Desc.</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.3%' }]}></Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.3%' }]}>Total</Text>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody, { backgroundColor: '#fff', }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text
                                    style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>
                                   Fuek For the Total Tour Movement for Aji Xpo 2019
                                 </Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Visitation</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>19/11/2019</Text>
                            </View>
                
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N250,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Refunds</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}> + N 0</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Balance Due</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>  N 0</Text>
                               
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody, { backgroundColor: '#C4C4C4', }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Ibeju Lekki Site</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Visitation</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>19/11/2019</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N6,000.00</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Julius Ceasar</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody, { backgroundColor: '#fff', }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Ibeju Lekki Site</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Visitation</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>19/11/2019</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N6,000.00</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Julius Ceasar</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody, { backgroundColor: '#C4C4C4', }]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Ibeju Lekki Site</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Visitation</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>19/11/2019</Text>
                            </View>
                            <View style={styles.detailsBodyCenter}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N6,000.00</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Julius Ceasar</Text>
                            </View>
                        </View>
                    </View>
                </View >
                <FooterNav />
            </View>
        )
    }
}
export default ViewRequisitions;