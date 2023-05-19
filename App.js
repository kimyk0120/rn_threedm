import {StatusBar} from 'expo-status-bar';
import FlexboxText from "./components/FlexboxTest";
import styled from "styled-components/native";
import CalendarView from "./components/CalendarView";
import {View} from "react-native";
import {StyleSheet} from "react-native";

const ViewWrapper = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default function App() {
  return (
      <View>
          <CalendarView/>
          <StatusBar style="auto"/>
      </View>
    // <ViewWrapper>
    //     {/*<FlexboxText></FlexboxText>*/}
    //     {/*<Text>Open up App.js to start working on your app! test</Text>*/}
    //
    // </ViewWrapper>

  );
}

