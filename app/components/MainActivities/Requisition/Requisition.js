import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FooterNav from '../../FooterNav/index';
import styles from './styles';
import BurgerMenu from '../../Dashboard/BurgerMenu/index';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get('window')

class Requisition extends React.Component {
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
                    <Text style={[styles.title, { fontFamily: 'ptsans-bold' }]}>Requisition</Text>
                </View>
                <View style={styles.main}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateRequisition')} style={styles.mainItems}><Text style={[styles.mainText, { fontFamily: 'ptsans-bold' }]}>Create Requisition</Text></TouchableOpacity>
                </View>
                <View style={{alignItems:"center", height:60/100*height}}>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '50%' }]}>Requested By</Text>
                        <Text style={[styles.detailsheaderText, { fontFamily: 'ptsans-bold', width: '50%' }]}>Amount Req. / Exp, Cat</Text>
                    </View>
                
                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody,{backgroundColor: '#C4C4C4',}]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{color:'#f50A0a'}}>Vendor</Text></Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody,{backgroundColor: '#fff',}]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{color:'#f50A0a'}}>Vendor</Text></Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody,{backgroundColor: '#C4C4C4',}]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{color:'#f50A0a'}}>Vendor</Text></Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody,{backgroundColor: '#fff',}]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{color:'#f50A0a'}}>Vendor</Text></Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailsBodyCon}>
                        <View style={[styles.detailsBody,{backgroundColor: '#C4C4C4',}]}>
                            <View style={styles.detailsBodyLeft}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>Aina Gold Estate | Aina Gold</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>2019 - 11 - 20 | <Text style={{color:'#f50A0a'}}>Vendor</Text></Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>3 Bedroom Flat 23</Text>
                            </View>
                            <View style={styles.detailsBodyRight}>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>N280,000.00</Text>
                                <Text style={[styles.detailsBodyText, { fontFamily: 'ptsans-bold' }]}>NEPA</Text>
                            </View>
                        </View>
                    </View>
                    
                </View >

                <FooterNav />
            </View>
        )
    }
}
export default Requisition;