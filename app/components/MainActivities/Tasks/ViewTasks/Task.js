import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import styles from './styles';

const { width, height } = Dimensions.get('window');
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }
    displayTaskInfo = (key) => {
        this.state.active === key ?
            this.setState({ active: -1 }) :
            this.setState({ active: key })
    }
    render() {
        const tasks = this.props.tasks.map((task, key) => {
            return (
                <View key={key} style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => this.displayTaskInfo(key)}
                        style={this.state.active === key ? styles.openedClientCon : styles.closedClientCon}>
                        <Foundation
                            style={this.state.active === key ? [styles.closedClientText, { color: '#000' }] : styles.closedClientText}
                            name={this.state.active === key ? "minus" : "plus"} size={20} />
                        <Text style={this.state.active === key ?
                            [styles.closedClientText, { color: '#000' }] :
                            styles.closedClientText}>{task.task}</Text>
                    </TouchableOpacity>
                    <View style={[styles.openClientInfoCon, { display: this.state.active === key ? 'flex' : 'none' }]}>
                        <Text style={styles.clientInfo}>Created By: Adegbenga Adeshina</Text>
                        <Text style={styles.clientInfo}>Assigned To: XYZ Properties Limited</Text>
                        <Text style={styles.clientInfo}>Created Date: Mon,31/12</Text>
                        <Text style={styles.clientInfo}>Due Date: Sun,01/12</Text>
                        <Text style={styles.clientInfo}> Priority: <Text style={{ color: 'red' }}>Highest</Text></Text>

                    </View>
                    <View style={[styles.clientButtonCon, { display: this.state.active === key ? 'flex' : 'none' }]}>
                        <TouchableOpacity style={styles.clientButton}><Text style={styles.buttonText}>View</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.clientButton}><Text style={styles.buttonText}>Edit</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.clientButton, { backgroundColor: 'red' }]}><Text style={styles.buttonText}>Delete</Text></TouchableOpacity>
                    </View>
                </View>
            )
        })
        return tasks
    }
}

export default Task