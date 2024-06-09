import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import Colors from '../../../values/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';



const levels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];
const stylesList = [
    'BALLET', 'BREAKING/B-BOYING', 'CONTEMPORARY', 'DANCE WORKOUT',
    'DANCEHALL', 'HEELS', 'HIPHOP', 'HOUSE', 'JAZZ', 'JAZZ FUNK',
    'K-POP', 'KRUMP', 'LOCKING', 'OPEN STYLE', 'POPPING', 'SALSA',
    'WHACKING', 'LITE FEET',
];
const classTypes = [
    'BARE', 'CENTER', 'CHOREOGRAPHY', 'COOL DOWNS', 'DANCE WORKOUTS',
    'FOLLOW ALONGS', 'IMPROV & FREESTYLE', 'MOVES & TECHNIQUES',
    'TIPS & LECTURES', 'VARIATIONS', 'WARMUPS & STRETCHES',
];
const classLengths = [
    '20 MIN OR LESS', '20 - 50 MIN', '50 MIN - 1H 15', '1H 15 OR MORE',
];
const instructors = ['AEY', 'ADDIE LOYOLA', 'ALAN HARDMAN LAUTURE', 'ALEC ALBRIGHT', 'AARON CRUZ', 'ALBREY ARS'];

const FilterScreen = (props) => {
    const {
        navigation,
    } = props;

    const [selectedOption, setSelectedOption] = useState('LESSONS');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [selectedClassTypes, setSelectedClassTypes] = useState([]);
    const [selectedClassLength, setSelectedClassLength] = useState('');
    const [availableToMe, setAvailableToMe] = useState(false);
    const [allowExplicitMusic, setAllowExplicitMusic] = useState(false);
    const [withMusicOnly, setWithMusicOnly] = useState(false);
    const [showMoreInstructors, setShowMoreInstructors] = useState(false);
    const [selectedInstructors, setSelectedInstructors] = useState([]);

    const toggleSelection = (list, setList, item) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const handleClearAllFilters = () => {
        setSelectedOption('LESSONS');
        setSelectedLevel('');
        setSelectedStyles([]);
        setSelectedClassTypes([]);
        setSelectedClassLength('');
        setAvailableToMe(false);
        setAllowExplicitMusic(false);
        setWithMusicOnly(false);
        setShowMoreInstructors(false);
        setSelectedInstructors([]);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Filters</Text>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name="close-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        selectedOption === 'LESSONS' && styles.selectedTab,
                    ]}
                    onPress={() => setSelectedOption('LESSONS')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedOption === 'LESSONS' && styles.selectedTabText,
                        ]}
                    >
                        LESSONS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        selectedOption === 'PROGRAMS' && styles.selectedTab,
                    ]}
                    onPress={() => setSelectedOption('PROGRAMS')}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedOption === 'PROGRAMS' && styles.selectedTabText,
                        ]}
                    >
                        PROGRAMS
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Level</Text>
            <View style={styles.optionsContainer}>
                {levels.map(level => (
                    <TouchableOpacity
                        key={level}
                        style={[
                            styles.option,
                            selectedLevel === level && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedLevel(level)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedLevel === level && styles.selectedOptionText,
                            ]}
                        >
                            {level}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Styles</Text>
            <View style={styles.optionsContainer}>
                {stylesList.map(style => (
                    <TouchableOpacity
                        key={style}
                        style={[
                            styles.option,
                            selectedStyles.includes(style) && styles.selectedOption,
                        ]}
                        onPress={() =>
                            toggleSelection(selectedStyles, setSelectedStyles, style)
                        }
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedStyles.includes(style) && styles.selectedOptionText,
                            ]}
                        >
                            {style}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Class Type</Text>
            <View style={styles.optionsContainer}>
                {classTypes.map(type => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.option,
                            selectedClassTypes.includes(type) && styles.selectedOption,
                        ]}
                        onPress={() =>
                            toggleSelection(selectedClassTypes, setSelectedClassTypes, type)
                        }
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedClassTypes.includes(type) && styles.selectedOptionText,
                            ]}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Class Length</Text>
            <View style={styles.optionsContainer}>
                {classLengths.map(length => (
                    <TouchableOpacity
                        key={length}
                        style={[
                            styles.option,
                            selectedClassLength === length && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedClassLength(length)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedClassLength === length && styles.selectedOptionText,
                            ]}
                        >
                            {length}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.text}>Available To Me</Text>
                <Switch
                    value={availableToMe}
                    onValueChange={setAvailableToMe}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.text}>Allow Explicit Music</Text>
                <Switch
                    value={allowExplicitMusic}
                    onValueChange={setAllowExplicitMusic}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.text}>With Music Only</Text>
                <Switch
                    value={withMusicOnly}
                    onValueChange={setWithMusicOnly}
                />
            </View>

            <Text style={styles.sectionTitle}>Instructors</Text>
            <View style={styles.optionsContainer}>
                {instructors.slice(0, showMoreInstructors ? instructors.length : 2).map(instructor => (
                    <TouchableOpacity
                        key={instructor}
                        style={[
                            styles.option,
                            selectedInstructors.includes(instructor) && styles.selectedOption,
                        ]}
                        onPress={() =>
                            toggleSelection(selectedInstructors, setSelectedInstructors, instructor)
                        }
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedInstructors.includes(instructor) && styles.selectedOptionText,
                            ]}
                        >
                            {instructor}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity onPress={() => setShowMoreInstructors(!showMoreInstructors)}>
                <Text style={styles.showMore}>{showMoreInstructors ? 'SHOW LESS' : 'SHOW MORE'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.showResultsButton}>
                <Text style={styles.showResultsButtonText}>SHOW RESULTS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearAllButton} onPress={handleClearAllFilters}>
                <Text style={styles.clearAllButtonText}>CLEAR ALL</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    closeButton: {
        fontSize: 18,
        color: '#888',
    },
    tabContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    tab: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    selectedTab: {
        backgroundColor: Colors.primaryPupple,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    selectedTabText: {
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black'
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    option: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    selectedOption: {
        backgroundColor: Colors.primaryPupple,
    },
    optionText: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500'
    },
    selectedOptionText: {
        color: '#fff',
        fontWeight: '700'
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    showMore: {
        color: '#6200ea',
        textAlign: 'center',
        marginVertical: 10,
    },
    showResultsButton: {
        backgroundColor: '#6200ea',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    showResultsButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    clearAllButton: {
        padding: 15,
        alignItems: 'center',
        marginVertical: 10,
    },
    clearAllButtonText: {
        color: '#888',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20
    },
    text: {
        color: 'black'
    }
});

export default FilterScreen;
