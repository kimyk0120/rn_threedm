import React, {useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Agenda, AgendaEntry, AgendaSchedule, CalendarProvider, DateData} from "react-native-calendars";
import TodayBtn from "./components/TodayBtn";

// import testIDs from '../testIDs';

interface State {
    items?: AgendaSchedule;
}

// interface state{
//     items: undefined
// }

function getDate(addDate:number){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + addDate);
    return tomorrow.toISOString().slice(0, 10);
}

export default function AgendaScreen() {


    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ("0" + today.getDate()).slice(-2);
        return year + "-" + month + "-" + day;
    });

    const [state, setState] = useState<State>({});


    const [nextDay, setNextDay] = useState(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow.toISOString().slice(0, 10);
    });

    const testVal = {
        "2023-06-07": {
            marked: true,
            dots: [{key: "dot3", color: "blue"}],
            dotColor: "black",
            selected: false,
        },
        "2023-06-08": {
            marked: true,
            dots: [
                {key: "dot1", color: "red"},
                {key: "dot2", color: "green"},
            ],
            selected: false,
        },
    }



    const dayAfterTommorow = null;


    // reservationsKeyExtractor = (item, index) => {
    //   return `${item?.reservation?.day}${index}`;
    // };

    const loadItems = (day: DateData) => {
        const items = state?.items || {};

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: "Item for " + strTime + " #" + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }

            const newItems: AgendaSchedule = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });

            setState({
                items: newItems
            });
        }, 1000);
    };

    const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? "black" : "#43515c";

        return (
            <TouchableOpacity
                // testID={testIDs.agenda.ITEM}
                style={[styles.item, {height: reservation.height}]}
                onPress={() => Alert.alert(reservation.name)}
            >
                <Text style={{fontSize, color}}>{reservation.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    };

    const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
        return r1.name !== r2.name;
    };

    const timeToString = (time: number) => {
        const date = new Date(time);
        return date.toISOString().split("T")[0];
    };
    const goToToday = () => {
        setSelectedDate(new Date().toISOString().slice(0, 10));
    };

    const onDayPress = (day: DateData) => {
        console.log("day pressed", day.dateString);
        setSelectedDate(day.dateString);
    };

    const tests: any =
        {
            "2012-05-22": [{name: "item 1 - any js object"}],
            "2012-05-23": [{name: "item 2 - any js object", height: 80}],
            "2012-05-24": [],
            "2012-05-25": [{name: "item 3 - any js object"}, {name: "any js object"}]
        };

    return (
        <SafeAreaView style={styles.container}>
            <CalendarProvider date={selectedDate}>
                <Agenda
                    selected={selectedDate}
                    testID={"kimyk"}
                    // items={state?.items}
                    items={tests}
                    // loadItemsForMonth={loadItems}
                    loadItemsForMonth={month => {
                        console.log("trigger items loading");
                    }}
                    onCalendarToggled={calendarOpened => {
                        console.log("onCalendarToggled :", calendarOpened);
                    }}
                    onDayPress={onDayPress}
                    onDayChange={day => {
                        console.log("day changed");
                    }}
                    // selected={selectedDate}

                    // Specify how each item should be rendered in agenda
                    renderItem={(item, firstItemInDay) => {
                        return (
                            <View>
                                <Text> renderItem test</Text>
                            </View>
                        );
                    }}

                    // Specify how each date should be rendered. day can be undefined if the item is not first in that day
                    renderDay={(day, item) => {
                        return (
                            <View>
                                <Text> renderDay test</Text>
                            </View>
                        );
                    }}
                    // Specify how empty date content with no items should be rendered
                    renderEmptyDate={() => {
                        return (
                            <View>
                                <Text> renderEmptyDate test</Text>
                            </View>
                        );
                    }}

                    // Specify how agenda knob should look like
                    // renderKnob={() => {
                    //     return <View />;
                    // }}
                    // Override inner list with a custom implemented component
                    // renderList={listProps => {
                    //     return <MyCustomList {...listProps} />;
                    // }}
                    // Specify what should be rendered instead of ActivityIndicator
                    renderEmptyData={() => {
                        return (
                            <View>
                                <Text> renderEmptyData test</Text>
                            </View>
                        );
                    }}
                    // Specify your item comparison function for increased performance
                    // rowHasChanged={(r1, r2) => {
                    //     return r1.text !== r2.text;
                    // }}
                    // Hide knob button. Default = false
                    // hideKnob={true}
                    // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
                    showClosingKnob={true}
                    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                    markingType={"multi-dot"}
                    markedDates={testVal}
                    // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
                    // disabledByDefault={true}
                    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
                    onRefresh={() => console.log("refreshing...")}
                    // Set this true while waiting for new data from a refresh
                    // refreshing={false}
                    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
                    // refreshControl={null}
                    // Agenda theme
                    // theme={{
                    //     // ...calendarTheme,
                    //     agendaDayTextColor: 'yellow',
                    //     agendaDayNumColor: 'green',
                    //     agendaTodayColor: 'red',
                    //     agendaKnobColor: 'blue'
                    // }}
                    // Agenda container style
                    // style={{}}
                    // renderItem={renderItem}
                    // renderEmptyDate={renderEmptyDate}
                    // rowHasChanged={rowHasChanged}
                    // showClosingKnob={true}
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#43515c'},
                    //    '2017-05-09': {textColor: '#43515c'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                    // monthFormat={'yyyy'}
                    // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                    // hideExtraDays={false}
                    // showOnlySelectedDayItems
                    // reservationsKeyExtractor={this.reservationsKeyExtractor}
                />
                {/*  Agenda  */}
                <TodayBtn goToToday={goToToday}></TodayBtn>
            </CalendarProvider>
        </SafeAreaView>
    ); // .return
}//.class

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
});
