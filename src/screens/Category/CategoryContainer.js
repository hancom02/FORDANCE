import CategoryMainView from "./views/CategoryMainView";

const CategoryContainer = (props) => {
    const {
        navigation,

    } = props;

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

    const propsCategory = {
        navigation,
        categories,
    };

    return <CategoryMainView navigation={navigation} categories={categories} />

}

export default CategoryContainer;