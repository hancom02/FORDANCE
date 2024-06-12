const { default: InstructorManageMainView } = require("./views/InstructorManageMainView")

const InstructorManageContainer = (props) => {
    const {
        navigation,
        
    } = props;

    const instructor = {
        name: "Ngoc Han",
        email: "2002hoshi@gmail.com",
        image_link: "https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg",
        introduce: "We have something to do...",
        prizes: [
            'Runner 1 red bull 2019',
            'Runner 3 tokyo ballet ceremony 2015'
        ],
        // lessons: LessonType[],
        // programs: ProgramType[],
    }

    const myLessons = [
        {
            lessonId: 1,
            name: "Ballet Basic With ABCXYZ",
            category: "Ballet",
            instructor: instructor,
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            totalTime: '4:06',
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            lessonId: 2,
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: instructor,
            level: "INTERMEDIATE",
            totalTime: '1:50',
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            lessonId: 3,
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: instructor,
            level: "INTERMEDIATE",
            totalTime: '3:12',
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"

        },
    ]

    const myPrograms = [
        {
            name: "Ballet Basic",
            introduce: "abc xyz",
            learn_what: "ahvjdcjc hjvdvjcj, dcvvcud",
            need_what: "vuuwvcvuwec cwcefvfe",
            category: "Ballet",
            instructor: instructor,
            level: 'BEGINNER',
            lessons_amount: 15,
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    name: 'How to do plete',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    video_URL: ' ',
                },
                {
                    name: 'How to do plete',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdZ2dMu6iPlTO62u0iwyL-gXlEO1pyBQToaodjY5izWyDcI8ohCh3SVJBzCzb8-aUio&usqp=CAU',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    video_URL: ' ',
                },
                {
                    name: 'How to do plete',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://media.istockphoto.com/id/1272937508/vi/anh/ballerina-dancing-with-silk-fabric-modern-ballet-dancer-in-fluttering-waving-cloth-pointe-shoes.jpg?s=612x612&w=0&k=20&c=YzCYit-TSpIQdrjJZhbWkgipgHzNUspeWI-xYrnrCHU=',
                    video_URL: ' ',
                },
                {
                    name: 'How to do plete',
                    level: 'BEGINNER',
                    category: "Ballet",
                    total_time: '1:15',
                    image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    video_URL: ' ',
                },
                {
                    name: 'How to do catfish',
                    level: 'BEGINNER',
                    category: "Ballet",
                    totalTime: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            name: 'The Boy Is Mine',
            introduce: "abc xyz",
            learn_what: "ahvjdcjc hjvdvjcj, dcvvcud",
            need_what: "vuuwvcvuwec cwcefvfe",
            category: "Chogreophy",
            instructor: instructor,
            level: "INTERMEDIATE",
            lessons_amount: 8,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            name: 'Easy Kpop',
            introduce: "abc xyz",
            learn_what: "ahvjdcjc hjvdvjcj, dcvvcud",
            need_what: "vuuwvcvuwec cwcefvfe",
            category: "Chogreophy",
            instructor: instructor,
            level: "INTERMEDIATE",
            lessons_amount: 5,
            image_link: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",

        },
    ]

    const propsMainView = {
        navigation,
        myLessons,
        myPrograms,
    }

    return <InstructorManageMainView{...propsMainView} />
}

export default InstructorManageContainer;