import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const CalendarWrapper = styled.View`
  border-bottom-width: 20px;
  border-bottom-color: #e0e0e0;
`
function CalendarView() {
    return (
        <CalendarWrapper>
            <Calendar />
        </CalendarWrapper>
    );
}

export default CalendarView;
