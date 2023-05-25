import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

function TodayBtn(props:any) {
    return (
        <TouchableOpacity onPress={props.goToToday} style={styles.todayButton}>
            <Text style={styles.todayButtonText}>Today</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todayButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: "#2daeea",
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },
    todayButtonText:{
        color:"white",
        fontWeight:"400",
    },
});

export default TodayBtn;
