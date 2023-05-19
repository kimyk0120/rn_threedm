import React, {useState} from "react";
import { Calendar } from "react-native-calendars";
import {Animated, StyleSheet, View, Alert} from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";

const styles = StyleSheet.create({
    container : {
        flexDirection:"column",
        flex:1
    },
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    bottom:{
        flex:1
    },
});
function CalendarView() {
    const posts = [
        {
            id: 1,
            title: "제목입니다.",
            contents: "내용입니다.",
            date: "2022-02-26",
        },
        {
            id: 2,
            title: "제목입니다.",
            contents: "내용입니다.",
            date: "2022-02-27",
        }
    ];

    const markedDates = posts.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
    }, {});

    const [selectedDate, setSelectedDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
    );

    const markedSelectedDates = {
        ...markedDates,
        [selectedDate]: {
            selected: true,
            marked: markedDates[selectedDate]?.marked,
        }
    }


    return (
        // <CalendarWrapper>
        // <View style={styles.container}>
        <Calendar style={styles.calendar} markedDates={markedSelectedDates} onDayPress={
            (day) => {
                setSelectedDate(day.dateString)
            }
        }/>
            // <View style={styles.bottom}>
            //     <Text>1</Text>
            // </View>
        // </View>
        // </CalendarWrapper>
    );
}

export default CalendarView;
