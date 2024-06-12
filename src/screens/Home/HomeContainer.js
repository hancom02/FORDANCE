import { useEffect, useState } from "react";
import { collection, firebaseDatabase, firestore, getDocs } from "../../firebase/reactNativeFirebase/firebaseConnect";
import { fetchAllLessons } from "../../redux/slices/lessonSlice";
import { fetchAllPrograms } from "../../redux/slices/programSlice";
import { useSelector } from "react-redux";
import { fetchInstructors, fetchStudents } from "../../redux/slices/userSlice";
import HomeMainView from "./views/HomeMainView";

const HomeContainer = (props) => {
    const {
        dispatch,
        navigation,
        route
    } = props;

    const lessons = [
        {
            name: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: 'BEGINNER',
            timeDuring: 16,
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "INTERMEDIATE",
            timeDuring: 16,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            name: 'Khmer Folk Dance',
            category: "Folk Dance",
            instructor: "Hoa Nhung",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "BASIC",
            timeDuring: 16,
            image_link: "https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_11/Ng%C3%A0y%209/DSCN9218.JPG"

        },
    ]

    const todayLessons = [
        {
            name: 'Khmer Folk Dance',
            category: "Folk Dance",
            instructor: "Hoa Nhung",
            level: "BASIC",
            timeDuring: 16,
            image_link: "https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng_11/Ng%C3%A0y%209/DSCN9218.JPG"
        },
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
    ]

    const danceLessons = [
        {
            name: 'Naughty Boy',
            category: "Breaking",
            instructor: "Loi Choi",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "ADVANCED",
            total_time: 16,
            image_link: "https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg"
        },
        {
            name: 'How to do plete',
            category: "Ballet",
            instructor: "Lisa",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "INTERMEDIATE",
            total_time: 16,
            image_link: "https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp"
        },
        {
            name: 'Naughty Boy',
            category: "Breaking",
            instructor: "Loi Choi",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "ADVANCED",
            total_time: 16,
            image_link: "https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg"
        },
        {
            name: 'How to do plete',
            category: "Ballet",
            instructor: "Lisa",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "INTERMEDIATE",
            total_time: 16,
            image_link: "https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp"
        },
    ]

    const programs = [
        {
            name: 'Vietnamese Folk Dance',
            category: "Folk Dance",
            instructor: {
                name: 'Diem Hoa',
                image_link: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
            },
            level: "INTERMEDIATE",
            lessons_amount: 5,
            image_link: "https://www.bienphong.com.vn/images/media//730/2022/3/19/60962250pm_duyen-no-voi-nghe-thuat1.jpg",

            lessons: [
                {
                    name: 'How to do plete',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
            ]
        },
        {
            name: "Ballet Basic",
            category: "Ballet",
            instructor: {
                name: 'Ngoc Han',
                image_link: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            },
            level: 'BEGINNER',
            lessons_amount: 15,
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    name: 'How to do plete',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
            ]
        },
        {
            name: 'Simple Track 3th',
            category: "Wacking",
            instructor: {
                name: 'Ready',
                image_link: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            },
            instructorImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            level: "INTERMEDIATE",
            lessons_amount: 8,
            image_link: "https://file.hstatic.net/200000656851/file/waacking_la_gi_d52dc1411e9f49b8929dc2d74717f573_grande.jpg",

            lessons: [
                {
                    name: 'How to do plete',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'INTERMEDIATE',
                    category: 'Folk Dance',
                    instructor: 'Diem Hoa',
                    instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    video_URL: ' ',
                },
            ]
        },
    ];

    const saveLessons = [
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "INTERMEDIATE",
            total_time: 16,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            level: "INTERMEDIATE",
            total_time: 16,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        

    ];

    //Dùng useSelector để trỏ vào state trong store
    //const { allLessons, loading, error } = useSelector((state) => state.lesson);

    const { allLessons, loading: lessonsLoading, error: lessonsError } = useSelector((state) => state.lesson);
    const { allPrograms, loading: programsLoading, error: programsError } = useSelector((state) => state.program);
    const { students, instructors, loading: userLoading, error: userError } = useSelector((state) => state.user);


    useEffect(() => {
        dispatch(fetchAllLessons()); //dùng dispatch để gửi actions vào reducer của lessonSlice
        dispatch(fetchAllPrograms());
        dispatch(fetchStudents());
        dispatch(fetchInstructors());
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
        allPrograms,
        students,
        instructors,
        loading: lessonsLoading || programsLoading || userLoading,
        error: lessonsError || programsError || userError,

    };

    return <HomeMainView{...propsHome} />
}

export default HomeContainer;