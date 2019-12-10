import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import DropDown from '../../../public/DropDown/DropDown';
import styles from './styles';

const ItemInfo = (props) => {
    return (
        <View style={{display:props.displayInfo}}>
            <DropDown placeholder="Select Item" />
            <View style={styles.inputCon}>
                <TextInput placeholder="Description" />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="Quantity" />
            </View>

            <View style={styles.inputCon}>
                <TextInput placeholder="Description" />
            </View>

            <View style={styles.inputCon}>
                <TextInput placeholder="Price" />
            </View>

            <View style={styles.inputCon}>
                <TextInput placeholder="Discount" />
            </View>

            <View style={styles.inputCon}>
                <TextInput placeholder="Discount %" />
            </View>

            <View style={styles.inputCon}>
                <TextInput placeholder="Discount" />
            </View>

            <DropDown placeholder="Select VAT Type" />

            <View style={styles.inputCon}>
                <TextInput placeholder="Exclusive             N 0.00" />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="VAT                       N 0.00" />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="Total                     N 0.00" />
            </View>

            <View style={styles.addItemCon}>
                <TouchableOpacity style={[styles.addItem, { backgroundColor: '#FF1414' }]}>
                    <Text style={styles.addItemText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemInfo;