import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FooterNav from '../../public/FooterNav/index';
import styles from './styles';
import Header from '../../public/Header/index';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window')

class ARequistion extends React.Component {
    render() {
        return (
            <View style={styles.detailsBodyCon}>
                <View style={[styles.detailsBody, { backgroundColor: this.props.color }]}>
                    <View style={styles.detailsBodyLeft}>
                        <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                        <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{ color: '#f50A0a' }}>Vendor</Text></Text>
                        <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                    </View>
                    <View style={styles.detailsBodyRight}>
                        <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                        <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                    </View>
                </View>
            </View>

        )
    }
}

class Requisition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requistions: []
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'ptsans-bold': require('../../../../assets/fonts/PTSans-Bold.ttf'),
            'redhattext-bold': require('../../../../assets/fonts/RedHatText-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title="Requisition" openSideBar={this.props.navigation} />
                <View style={styles.main}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CreateRequisition')}
                        style={styles.mainItems}>
                        <Text
                            style={[styles.mainText, { fontFamily: 'ptsans-bold' }]}>
                            Create Requisition</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsHeader}>
                    <Text
                        style={[styles.detailsheaderText,
                        { fontFamily: 'ptsans-bold', width: '50%' }]}>
                        Requested By</Text>
                    <Text
                        style={[styles.detailsheaderText,
                        { fontFamily: 'ptsans-bold', width: '50%' }]}>
                        Amount Req. / Exp, Cat</Text>
                </View>
                <ScrollView style={{ height: 60 / 100 * height }}>
                    <View style={{ alignItems: "center", height: '100%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#C4C4C4" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#C4C4C4" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#C4C4C4" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewRequisitions")}>
                            <ARequistion color="#fff" />
                        </TouchableOpacity>
                    </View >
                </ScrollView>
                <View style={{ height: 10 / 100 * height }}>
                    <FooterNav />
                </View>
            </View>
        )
    }
}
export default Requisition;