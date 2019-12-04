import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get('window')

class Expenses extends React.Component {
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BurgerMenu openSideBar={this.props.navigation} />
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Expenses</Text>
                </View>
                <View style={{ alignItems: "center", height: 70 / 100 * height }}>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Exp. Cat.</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Amount</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Beneficiary</Text>
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
                <View style={styles.main}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('RecordExpenses', { navigation: this.props.navigation })}
                        style={styles.mainItems}>
                        <Text style={[styles.mainText, { fontFamily: 'ptsans-bold' }]}>Record Expenses</Text>
                    </TouchableOpacity>
                </View>
                <FooterNav />
            </View>
        )
    }
}
export default Expenses;