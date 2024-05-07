import HomeMainView from "./views/HomeMainView";

const HomeContainer = (props) => {
    const { 
        navigation,
        
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
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"

        },
    ]

    const programs = [
        {
            programName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            level: 'BEGINNER',
            lessonAmount: 15,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            programName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            lessonAmount: 8,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            programName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            lessonAmount: 5,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"

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

    const propsHome = {
        navigation,
        lessons,
        programs,
        saveLessons

    };

    return <HomeMainView{...propsHome} />
}

export default HomeContainer;