import React, {useCallback, useState} from "react";
import {AgendaList, CalendarProvider, ExpandableCalendar} from 'react-native-calendars';
import {StyleSheet, Text, View, SafeAreaView} from "react-native";


export default function App() {

    const [selectedDate, setSelectedDate] = useState(()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        return year + '-' + month + '-' + day;
    });

    const onDateChanged = ()=>{
        console.log("onDateChanged");
    }

    const onMonthChange = ()=>{
        console.log("onMonthChange");
    }

    const onDayPress = (day) =>{
        // console.log(day);
        // console.log(selectedDate);
        setSelectedDate(day.dateString);
    }

    // const renderItem = useCallback(({item}: any) => {
    //     return <AgendaItem item={item}/>;
    // }, []);

    return (
        <SafeAreaView style={styles.container}>


            <CalendarProvider
                // showTodayButton
                // todayBottomMargin={100}
                onDateChanged={onDateChanged}
                onMonthChange={onMonthChange}
                // disabledOpacity={0.6}
                date={selectedDate}
            >
                <ExpandableCalendar
                    initialPosition={ExpandableCalendar.positions.OPEN}
                    // initialPosition={ExpandableCalendar.positions.CLOSED}
                    // markedDates={{
                    //     '2023-05-01': { marked: true, dotColor: 'red', selected: true },
                    //     '2023-05-05': { marked: true, dotColor: 'green', selected: true },
                    //     '2023-05-10': { marked: true, dotColor: 'blue', selected: true },
                    // }}

                    markingType={'multi-dot'}
                    markedDates={{
                        '2023-05-10': {
                            marked: true,
                            dots: [
                                { key: 'dot1', color: 'red'},
                                { key: 'dot2', color: 'green' },
                            ],
                            selected: false,
                        },
                        '2023-05-05': {
                            marked: true,
                            dots: [{ key: 'dot3', color: 'blue' }],
                            dotColor:'black',
                            selected: true,
                        },
                    }}

                    closeOnDayPress={false}
                    onDayPress={day => {onDayPress(day)}}
                />

                <AgendaList
                    sections={[
                        { title: '2023-05-01', data: [{ name: 'Meeting', time: '10:00 AM' }] },
                        { title: '2023-05-05', data: [{ name: 'Event 1', time: '2:00 PM' }, { name: 'Event 2', time: '4:00 PM' }] },
                        { title: '2023-05-10', data: [{ name: 'Conference', time: '9:00 AM' }] },
                    ]}
                    renderItem={(item) => (
                        <View style={{ padding: 20 }}>
                            {/*<Text>{item.name}</Text>*/}
                            <Text>ㅅㄷㄴㅅㄷㄴㅅㄷ</Text>
                            {/*<Text>{item.time}</Text>*/}
                        </View>
                    )}
                    sectionStyle={{ backgroundColor: '#f0f0f0' }}
                    dayFormat={'yyyy-MM-d'}
                />
            </CalendarProvider>
            <View style={{backgroundColor: "green"}}>
                <Text>test</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    elevatedElement: {
        zIndex: 3, // works on ios
        elevation: 3, // works on android
    },

    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        backgroundColor: 'lightgrey'
    },
    section: {
        backgroundColor: 'black',
        color: 'grey',
        textTransform: 'capitalize'
    }
});
