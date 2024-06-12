import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const AccountProgressView = (props) => {
    const {
        navigation,
    } = props;

    //DATA
    const classJoined = 8;
    const lessonCompleted = 10;
    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',
            progress: 0.5,
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593",
            process: 1,
        },
        {
            lessonName: 'Kpop basic',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.5,
        },
        {
            lessonName: 'Kpop Intermediate',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.95,
        },
        {
            lessonName: 'Kpop Advanced',
            category: "Kpop",
            instructor: "Lip J",
            level: "ADVANCED",
            timeDuring: 10,
            image: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",
            progress: 0.7,
        },
    ]

    const handleNavPurchasedLessons = () => {
        navigation.navigate('PurchasedLessons', { lessons });
    }

    const handleNavHistory = () => {
        navigation.navigate('History', { lessons });
    }

    const handleNavDownload = () => {
        navigation.navigate('Download');
    }

    const handleNavOfflineBooking = () => {
        navigation.navigate('Offline Booking');
    }

    const handleNavFavourites = () => {
        navigation.navigate('Favourites')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.classInfoContainer}>
                <View style={styles.classInfoItem}>
                    <Text style={styles.boldText}>{classJoined}</Text>
                    <Text style={styles.normalText}>Classes joined</Text>
                </View>
                <View style={styles.classInfoItem}>
                    <Text style={styles.boldText}>{lessonCompleted}</Text>
                    <Text style={styles.normalText}>Classes completed</Text>
                </View>
            </View>
            <View style={styles.touchContainer}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavPurchasedLessons}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="bag-check-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Purchased Lessons</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavOfflineBooking}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faAddressBook} size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Offline Booking</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavFavourites}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="heart-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Favourites</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavHistory}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="time-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>History</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.touchItem} onPress={handleNavDownload}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name="cloud-download-outline" size={30} color="black" style={{ marginHorizontal: 10, }} />
                            <Text style={styles.bottomText}>Download</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    classInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    classInfoItem: {
        flex: 1,
        alignItems: 'center',
    },
    boldText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    normalText: {
        fontSize: 15,
        color: 'black',
    },
    touchContainer: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 50,
        borderRadius: 20,
    },
    innerContainer: {
        marginHorizontal: 16,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },
    touchItem: {
        marginHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
    divider: {
        height: 0.5,
        backgroundColor: 'grey',
    },
});

export default AccountProgressView;
