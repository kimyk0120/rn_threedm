import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarView from "./components/CalendarView";
import styled from "styled-components/native";

const ViewWrapper = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <ViewWrapper>
      <CalendarView />
      {/*<Text>Open up App.js to start working on your app! test</Text>*/}
      <StatusBar style="auto" />
    </ViewWrapper>
  );
}

