import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

const DropDown = (props) => {
    return (
        <View style={styles.dropDownCon}>
            <RNPickerSelect
                placeholder={{ label: props.placeholder, value: 'null' }}
                style={styles.dropDownCon}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    )
}
export default DropDown;