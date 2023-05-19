import {StatusBar} from 'expo-status-bar';
import FlexboxText from "./components/FlexboxTest";
import styled from "styled-components/native";
import CalendarView from "./components/CalendarView";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import {Calendar} from "react-native-calendars";

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
});

export default function App() {
    return (
        <View style={styles.container}>

            <CalendarView/>
        </View>
    );
}

