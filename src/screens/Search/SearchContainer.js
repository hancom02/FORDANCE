const { default: SearchMainView } = require("./views/SearchMainView");

const SearchContainer = (props) => {
    const {
        navigation,
        onClose,

    } = props;

    const infor = "";

    const lessonResult = [
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

    const programResult = [
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
        }
    ]


    const searchProps = {
        navigation,
        onClose,
        infor,
        lessonResult,
        programResult
    }

    return <SearchMainView{...searchProps}/>
}

export default SearchContainer;