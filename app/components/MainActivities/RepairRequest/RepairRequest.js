import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import Header from '../../public/Header/index';
import { ScrollView } from 'react-native-gesture-handler';
import FooterNav from '../../public/FooterNav/index';

const { width, height } = Dimensions.get('window')
class RepairRequest extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title="Repair Requests" openSideBar={this.props.navigation} />
                <View style={{ height: 10 / 100 * height, justifyContent: "center" }}>
                    <Text style={styles.intro}>Click on any of the repair requests
                         on the {"\n"} list below to view and modify your requests</Text>
                </View>
                <ScrollView style={{ height: 65 / 100 * height }} horizontal={true}>
                    <View>
                        <View style={styles.header}>
                            <Text style={[styles.headerText, { width: 57 }]}>ID</Text>
                            <Text style={[styles.headerText, { width: 110 }]}>Log Date</Text>
                            <Text style={[styles.headerText, { width: 72 }]}>Type</Text>
                            <Text style={[styles.headerText, { width: 173 }]}>Client</Text>
                            <Text style={[styles.headerText, { width: 119 }]}>Estate</Text>
                            <Text style={[styles.headerText, { width: 136 }]}>Unit Number</Text>
                            <Text style={[styles.headerText, { width: 109 }]}>Category</Text>
                            <Text style={[styles.headerText, { width: 118 }]}>Status</Text>
                            <Text style={[styles.headerText, { width: 106 }]}>Priority</Text>
                        </View>
                        <Table color='#C4C4C4' />
                        <Table color='#fff' />
                        <Table color='#C4C4C4' />
                        <Table color='#fff' />
                    </View>
                </ScrollView>
                <View style={{height:10/100*height}}>
                    <FooterNav />
                </View>
            </View>
        )
    }
}

const Table = (props) => {
    return (
        <View style={[styles.table, { backgroundColor: props.color }]}>
            <Text style={[styles.tableText, { width: 57 }]}>1</Text>
            <Text style={[styles.tableText, { width: 110 }]}>2019/10/29</Text>
            <Text style={[styles.tableText, { width: 72 }]}>Staff</Text>
            <Text style={[styles.tableText, { width: 173 }]}>TREASURE ISLAND ESTATE LEKKI PHASE 1 - Retail</Text>
            <Text style={[styles.tableText, { width: 119 }]}>Tomison Ade</Text>
            <Text style={[styles.tableText, { width: 136 }]}>1</Text>
            <Text style={[styles.tableText, { width: 109 }]}>Text 1</Text>
            <Text style={[styles.tableText, { width: 118 }]}>Pending</Text>
            <Text style={[styles.tableText, { width: 106 }]}>High</Text>
        </View>
    )
}
export default RepairRequest;