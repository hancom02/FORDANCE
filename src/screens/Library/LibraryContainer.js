import LibraryMainView from "./views/LibraryMainView";

const LibraryContainer = (props) => {
    const {
        navigation,

    } = props;

    const lessons = [
        {
            name: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            timeDuring: 16,
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
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

    const programs = [
        {
            name: "Ballet Basic",
            category: "Ballet",
            instructor: {
                name: "Ngoc Han",
                image_link: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            },
            level: 'BEGINNER',
            lessons_amount: 15,
            image_link: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    name: 'How to do plete',
                    total_time: '1:15',
                    image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do catfish',
                    total_time: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do plete',
                    total_time: '1:15',
                    image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdZ2dMu6iPlTO62u0iwyL-gXlEO1pyBQToaodjY5izWyDcI8ohCh3SVJBzCzb8-aUio&usqp=CAU',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do catfish',
                    total_time: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do plete',
                    total_time: '1:15',
                    image_link: 'https://media.istockphoto.com/id/1272937508/vi/anh/ballerina-dancing-with-silk-fabric-modern-ballet-dancer-in-fluttering-waving-cloth-pointe-shoes.jpg?s=612x612&w=0&k=20&c=YzCYit-TSpIQdrjJZhbWkgipgHzNUspeWI-xYrnrCHU=',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do plete',
                    total_time: '1:15',
                    image_link: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do catfish',
                    total_time: '1:15',
                    image_link: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            name: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: {
                name: 'Redy',
                image_link: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            },
            level: "INTERMEDIATE",
            lessons_amount: 8,
            image_link: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            name: 'Easy Kpop',
            category: "Chogreophy",
            instructor: {
                name: 'Lip j',
                image_link: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            },
            level: "INTERMEDIATE",
            lessons_amount: 5,
            image_link: "https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1",

        },
    ];

    const categories = [
        {
            category: "Ballet",
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',
            categoriesItems: [
                {
                    name: "Ballet Basic",
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },
                {
                    name: "Ballet Intermediate",
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },
                {
                    name: "Ballet Advanced",
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },

            ]
        },
        {
            category: "Open Style",
            image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            categoriesItems: [
                {
                    name: "Open Styles Basic",
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },
                {
                    name: "Open Styles Intermediate",
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },
                {
                    name: "Open Styles Advanced",
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },

            ]
        },
        {
            category: "Kpops",
            image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1',
            categoriesItems: [
                {
                    name: "Kpop Basic",
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },
                {
                    name: "Kpop Intermediate",
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },
                {
                    name: "Kpop Advanced",
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },

            ]
        },

    ]
    const instructors = [
        {
            instructorName: "Lip J",
            goals: [
                "Goal A",
                "Goal B"
            ],
            introduce: "Introduce...........................................................................................................",
            instructorImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            instructorCoverImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            lessons: [
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
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
            instructorName: "Redy",
            goals: [
                "Goal A",
                "Goal B"
            ],
            introduce: ".........................................................",
            instructorImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            instructorCoverImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            lessons: [
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
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
            instructorName: "Lip J",
            goals: [
                "Goal A",
                "Goal B"
            ],
            introduce: ".........................................................",
            instructorImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            instructorCoverImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            lessons: [
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },

            ]
        }
    ]

    const propsLibrary = {
        navigation,
        lessons,
        programs,
        categories,
        instructors

    };

    return <LibraryMainView{...propsLibrary} />
}

export default LibraryContainer;