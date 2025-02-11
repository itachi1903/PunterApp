import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/verifyStyle";
import { ThemedText } from "@/components/ThemedText";

const VerifyEmail = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [timer, setTimer] = useState(10);
    const otpInputs = useRef<TextInput[]>([]);

    // ⏳ Countdown Timer for Resend
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // 🏷 Handle OTP Input Change & Move to Next
    const handleOtpChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < otpInputs.current.length - 1) {
                otpInputs.current[index + 1].focus();
            }
        }
    };

    // ⬅ Handle Backspace Press (Move to Previous Field)
    const handleKeyPress = (index: number, key: string) => {
        if (key === "Backspace" && !otp[index] && index > 0) {
            otpInputs.current[index - 1].focus();
        }
    };
    const handleRequest = ()=>{
        setTimer(10)
        setOtp(["", "", "", "", ""])
        Alert.alert("Check email")
    }
    const handleSubmit = ()=>{
        console.log("submitted otp",otp);
        setOtp(["", "", "", "", ""])
        Alert.alert("verified")
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Verify E-Mail</Text>
            <Text style={styles.subtitle}>A 5-Digit code has been sent to your email</Text>

            {/* OTP Input Boxes */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (otpInputs.current[index] = ref!)}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                    />
                ))}
            </View>

            {/* Timer */}
            {timer !== 0 && <Text style={styles.timerText}>
                Code will be resent in{" "}
                <Text style={styles.timerNumber}>
                    {timer.toString().padStart(2, "0")}s
                </Text>
            </Text>}



            {/* Proceed Button */}
            {timer === 0 ?
                <Pressable >
                    <Text style={[styles.timerText, { color: "#FFD700" }]} onPress={handleRequest}>Resend code</Text>
                </Pressable> :
                <TouchableOpacity style={styles.proceedButton} onPress={handleSubmit}>
                    <Text style={styles.proceedButtonText}>Proceed</Text>
                </TouchableOpacity>
            }
        </SafeAreaView>
    );
};

export default VerifyEmail;
