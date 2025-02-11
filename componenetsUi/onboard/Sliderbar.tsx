import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import { styles } from '@/styles/onboardingstyle'
import { Link } from 'expo-router'

const Sliderbar = ({activebar} : { activebar: string}) => {
    console.log("active bar from slidebar" , activebar);
    
    return (
        <View style={styles.upperSlider}>
            <View style={styles.slideBar}>
                <View style={[styles.bar, activebar == "onboarding_first" && { backgroundColor: '#FFFF00' }]}></View>
                <View style={[styles.bar, activebar == "onboarding_second" && { backgroundColor: '#FFFF00' }]}></View>
                <View style={[styles.bar, activebar == "onboarding_third" && { backgroundColor: '#FFFF00' }]}></View>
            </View>
            <Link href={"/login"} style={styles.link}>Skip</Link>
        </View>
    )
}

export default Sliderbar