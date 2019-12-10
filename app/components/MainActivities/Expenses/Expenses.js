import React from 'react';
import { View, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import FooterNav from '../../public/FooterNav/index';
import styles from './styles';
import Header from '../../public/Header/index';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get('window');

class Expense extends React.Component {
    render() {
        return (
            <View style={styles.detailsBodyCon}>
                <View style={[styles.detailsBody, { backgroundColor: this.props.color }]}>
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
        )
    }
}

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
                    <Header title="Expenses" openSideBar={this.props.navigation} />
                <View style={styles.detailsHeader}>
                    <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Exp. Cat.</Text>
                    <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Amount</Text>
                    <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '33.33%' }]}>Beneficiary</Text>
                </View>
                <ScrollView style={{ height: 40 / 100 * height }}>
                    <Expense color="#C4C4C4" />
                    <Expense color='#fff' />
                    <Expense color="#C4C4C4"  />
                    <Expense color='#fff' />
                    <Expense  color="#C4C4C4" />
                    <Expense color='#fff' />
                    <Expense  color="#C4C4C4" />
                </ScrollView>
                <View style={styles.main}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('RecordExpenses', { navigation: this.props.navigation })}
                        style={styles.mainItems}>
                        <Text style={[styles.mainText, { fontFamily: 'ptsans-bold' }]}>Record Expenses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>
            </View >
        )
    }
}
export default Expenses;