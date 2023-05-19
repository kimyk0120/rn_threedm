import {StyleSheet, View} from "react-native";
import React from "react";


export default function FlexboxText() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            </View>
            <View style={styles.right}>
                <View style={styles.rightTop}>
                </View>
                <View style={styles.rightBottom}>
                </View>
            </View>
        </View>
    )
}
// flexDirection : flex 방향을 결정 ; row는 좌에서우 (->)  행방향 ;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',  //
    },
    left: {
        flex: 1,
        backgroundColor: 'red'
    },
    right: {
        flex: 1,
        flexDirection: 'column',
    },
    rightTop: {
        flex: 1,
        backgroundColor: 'blue'
    },
    rightBottom: {
        flex: 2,
        backgroundColor: 'yellow'
    }


});

