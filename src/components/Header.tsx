import React, { useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import  userImg from '../assets/wesley_logo.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }
        loadStorageUserName();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>
                    { userName }
                </Text>
            </View>
            <Image style={styles.image} source={userImg} />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    username: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 42,
    }
})