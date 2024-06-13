const { SafeAreaView, StyleSheet, TouchableOpacity, Vibration, View } = require("react-native")
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopUpAddLessonToSchedule = ({onClose}) =>
{
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onChangeDate2 = (event, selectedDate) => {
        if (event.type === 'set') {
            setSelectedDate(selectedDate);
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.iconConatainer}>
                <TouchableOpacity style={styles.icon} onPress={onClose}>
                    <Ionicons name="close-outline" size={32}/>
                </TouchableOpacity>
            </View>

            <DateTimePicker 
                testID='selectDatePicker'
                value={selectedDate}
                mode='date'
                display='calendar'
                onChange={(event, selectedDate) => onChangeDate2(selectedDate)}
            />

        </SafeAreaView>
    )
}

export default PopUpAddLessonToSchedule

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    iconConatainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    icon: {
        
    }
})