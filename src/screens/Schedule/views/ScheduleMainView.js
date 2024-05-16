import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyHeader from "../../../components/MyHeader";

import DatePicker from 'react-native-modern-datepicker';  
import {getToday, getFormatedDate} from 'react-native-modern-datepicker'

import { useState } from "react";
import Colors from "../../../values/colors";

import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallerLessonComponent from "../../../components/SmallerLessonComponent";


const scheduleFor = "Schedule for: ";
const myDelete = "Delete";

const ScheduleMainView = (props) => {
    const {
        navigation,
        lessonInDatetime
    } = props;

    const today = new Date();

    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

    const [date, setDate] = useState('2024/05/17');

    const handleChangeDate = ({propDate}) => {
        setDate(propDate)
    }

    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson')
    }

    return(
        <View>
            <MyHeader />

            <View style={styles.dateTimeContainer}>
                <DatePicker
                    mode='calendar' 
                    selected={date}
                    onDateChanged={handleChangeDate}
                />
            </View>

            <View style={styles.scheduleContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}>
                    <Text style={styles.textTitle}>{scheduleFor} {date}</Text>
                    <TouchableOpacity>
                        <Ionicons name="add-outline" size={28} color='black'/>
                    </TouchableOpacity>
                </View>

                <View style={styles.lessonsContainer}>
                    <FlatList 
                        data={lessonInDatetime}
                        renderItem={({item, index}) => 
                            <View style={{marginBottom: 16, flexDirection: 'row'}}>
                                <SmallerLessonComponent
                                lesson={item}
                                index={index+1}
                                handleNav={() => handleNavDetailLesson()}
                                />
                                <TouchableOpacity>
                                    <Text>{myDelete}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    )
}

export default ScheduleMainView;

const styles = StyleSheet.create({
    container: {

    },
    dateTimeContainer: {
        marginTop: 1
    },
    scheduleContainer: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    lessonsContainer: {
        height: '46%'

    }
})