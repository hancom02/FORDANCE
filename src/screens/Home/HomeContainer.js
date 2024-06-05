import { useEffect, useState } from "react";
import { collection, firebaseDatabase, firestore, getDocs } from "../../firebase/reactNativeFirebase/firebaseConnect";
import HomeMainView from "./views/HomeMainView";
import { fetchAllLessons } from "../../redux/slices/lessonSlice";
import { useSelector } from "react-redux";

const HomeContainer = (props) => {
    const { 
        dispatch,
        navigation,
        route
    } = props;

    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            lessonName: 'Khmer Folk Dance',
            category: "Folk Dance",
            instructor: "Hoa Nhung",
            level: "BASIC",
            timeDuring: 16,
            image: "https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_11/Ng%C3%A0y%209/DSCN9218.JPG"

        },
    ]

    const todayLessons = [
        {
            lessonName: 'Khmer Folk Dance',
            category: "Folk Dance",
            instructor: "Hoa Nhung",
            level: "BASIC",
            timeDuring: 16,
            image: "https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_11/Ng%C3%A0y%209/DSCN9218.JPG"
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
    ]

    const danceLessons = [
        {
            lessonName: 'Naughty Boy',
            category: "Breaking",
            instructor: "Loi Choi",
            level: "ADVANCED",
            timeDuring: 16,
            image: "https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg"
        },
        {
            lessonName: 'How to do plete',
            category: "Ballet",
            instructor: "Lisa",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp"
        },
        {
            lessonName: 'Naughty Boy',
            category: "Breaking",
            instructor: "Loi Choi",
            level: "ADVANCED",
            timeDuring: 16,
            image: "https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg"
        },
        {
            lessonName: 'How to do plete',
            category: "Ballet",
            instructor: "Lisa",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp"
        },
    ]

    const programs = [
        {
            programName: 'Vietnamese Folk Dance',
            category: "Folk Dance",
            instructor: "Diem Hoa",
            instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 5,
            image: "https://www.bienphong.com.vn/images/media//730/2022/3/19/60962250pm_duyen-no-voi-nghe-thuat1.jpg",

            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            programName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            lessonAmount: 15,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdZ2dMu6iPlTO62u0iwyL-gXlEO1pyBQToaodjY5izWyDcI8ohCh3SVJBzCzb8-aUio&usqp=CAU',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://media.istockphoto.com/id/1272937508/vi/anh/ballerina-dancing-with-silk-fabric-modern-ballet-dancer-in-fluttering-waving-cloth-pointe-shoes.jpg?s=612x612&w=0&k=20&c=YzCYit-TSpIQdrjJZhbWkgipgHzNUspeWI-xYrnrCHU=',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            programName: 'Simple Track 3th',
            category: "Wacking",
            instructor: "Redy",
            instructorImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 8,
            image: "https://file.hstatic.net/200000656851/file/waacking_la_gi_d52dc1411e9f49b8929dc2d74717f573_grande.jpg",
            
            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
    ];

    const saveLessons = [
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        
    ];

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     // Fetch data from Firestore
    //     const fetchData = async () => {
    //         const snapshot = await firebaseDatabase.collection("lessons").get();
    //         const snapshot2 = await firebaseDatabase.collection('lessons').doc("").delete();
    //         const dataList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     setData(dataList);
    //     };

    //     fetchData();
    // }, []);
    // console.log("FETCH DATA LESSONS: ", data);

    //Dùng useSelector để trỏ vào state trong store
    const { allLessons, loading, error } = useSelector((state) => state.lesson);

    useEffect(() => {
        dispatch(fetchAllLessons()); //dùng dispatch để gửi actions vào reducer của lessonSlice
    }, [dispatch]);

    const propsHome = {
        dispatch,
        navigation,
        lessons,
        todayLessons,
        danceLessons,
        programs,
        saveLessons,
        allLessons,
    };

    return <HomeMainView{...propsHome} />
}

export default HomeContainer;