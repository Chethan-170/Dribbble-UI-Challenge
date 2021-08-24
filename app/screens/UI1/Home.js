import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={[{flex: 1, backgroundColor: '#2A5679', padding: 20}]}>
                <View style={styles.headContainer}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: 'bold'
                    }}>Class.</Text>
                    <View style={styles.iconContainer}>
                        <View style={{
                            padding: 15,
                            backgroundColor: '#426B88',
                            borderRadius: 30,
                            marginLeft: 10
                        }}>
                            <MaterialIcons name='sms' size={20} color={'#fff'}/>
                        </View>
                        <View style={{
                            padding: 15,
                            backgroundColor: '#426B88',
                            borderRadius: 30,
                            marginLeft: 10
                        }}>
                        <Feather name='settings' size={20} color={'#fff'}/>
                        </View>
                    </View>
                </View>
                <View style={styles.notificationContainer}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View>
                            <FontAwesome name={'dot-circle-o'} color={'#fff'} size={30}/>
                        </View>
                        <View style={{paddingHorizontal: 8}}>
                            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Live now</Text>
                            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Science | 10.00 AM - 12.00 PM</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            padding: 10,
                            backgroundColor: '#F19273',
                            borderRadius: 30
                        }}>
                            <Entypo name='cross' size={25} color={'#fff'}/>
                        </View>                        
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 25
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 25,
                        fontWeight: '500'
                    }}>Upcoming classes</Text>
                    <AntDesign name={'arrowright'} color={'#fff'} size={30}/>
                </View>
            </View>
            <View style={[{flex: 1, backgroundColor: '#F2F8FD'}]}>
                <View style={{
                    position: 'absolute',
                    top: -140,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: 20
                }}>
                    <View style={{
                        height: 210,
                        width: 165,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                    }}>
                        <View style={{
                            padding: 20                            
                        }}>
                            <View style={{
                                backgroundColor: '#C6E3F4',
                                height: 110,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}>
                                <FontAwesome5 name={'brush'} color={'#2B8CD1'} size={60}/>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginTop: 15
                                }}>Design</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 5
                                }}>01.00 - 03.00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height: 210,
                        width: 165,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                    }}>
                        <View style={{
                            padding: 20                            
                        }}>
                            <View style={{
                                backgroundColor: '#C6E3F4',
                                height: 110,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}>
                                <MaterialIcons name={'sms'} color={'#2B8CD1'} size={60}/>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginTop: 15
                                }}>Language</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 5
                                }}>03.00 - 05.00 PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    headContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    iconContainer:{
        flexDirection: 'row'
    },
    notificationContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EF835F',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginTop: 20,
        borderRadius: 7
    }
})
