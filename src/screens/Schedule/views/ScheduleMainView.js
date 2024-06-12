import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyHeader from "../../../components/MyHeader";

import DatePicker from 'react-native-modern-datepicker';  
import {getToday, getFormatedDate} from 'react-native-modern-datepicker'

import { useState } from "react";
import Colors from "../../../values/colors";

import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallerLessonComponent from "../../../components/SmallerLessonComponent";
import Search from "../../Search";
import { faL } from "@fortawesome/free-solid-svg-icons";


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
    const [isShowSearch, setShowSearch] = useState(false);

    const handleChangeDate = ({propDate}) => {
        setDate(propDate)
    }

    const handleNavDetailLesson = (lesson) => {
        navigation.navigate('Lesson', {isOwner: false, lesson})
    }

    const handleNavSearch = () => {
        console.log("ON PRESS ICON SEARCH IN SCHEDULE")
        setShowSearch(true);
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
                    {/* <TouchableOpacity onPress={handleNavSearch}>
                        <Ionicons name="add-outline" size={28} color='black'/>
                    </TouchableOpacity> */}
                </View>

                <View style={styles.lessonsContainer}>
                    <FlatList 
                        data={lessonInDatetime}
                        renderItem={({item, index}) => 
                            <View style={{marginBottom: 16, flexDirection: 'row'}}>
                                <SmallerLessonComponent
                                lesson={item}
                                index={index+1}
                                isOwner={false}
                                handleNav={() => handleNavDetailLesson(item)}
                                />
                                <TouchableOpacity>
                                    <Text>{myDelete}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </View>

            {/* RENDER SEARCH */}
           {isShowSearch && <Search navigation={navigation} onClose={() => setShowSearch(false)}/>}
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