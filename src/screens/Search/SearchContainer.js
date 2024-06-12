const { default: SearchMainView } = require("./views/SearchMainView");

const SearchContainer = (props) => {
    const {
        navigation,
        // onClose,

    } = props;

    const infor = "";

    const lessonResult = [
        {
            name: 'Naughty Boy',
            category: "Breaking",
            instructor: "Loi Choi",
            level: "ADVANCED",
            timeDuring: 16,
            image_link: "https://t3.ftcdn.net/jpg/05/98/71/10/360_F_598711013_QsPD9pZZU5LGEuPtqtdvgQKRuO2rV07k.jpg"
            
        },
        {
            name: 'How to do plete',
            category: "Ballet",
            instructor: "Lisa",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image_link: "https://www.commercialappeal.com/gcdn/presto/2019/10/18/PMCA/a511454f-ba76-47ae-98a0-845cd0d1925a-101719CollageDanceCollective05.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp"
        },
    ]

    const programResult = [
        {
            name: 'Vietnamese Folk Dance',
            category: "Folk Dance",
            instructor: "Diem Hoa",
            instructorImage: 'https://hoinghesimua.vn/wp-content/uploads/2023/07/tuyeet-minh-16894019515362059533221.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 5,
            image_link: "https://www.bienphong.com.vn/images/media//730/2022/3/19/60962250pm_duyen-no-voi-nghe-thuat1.jpg",

            lessons: [
                {
                    name: 'How to do plete',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    lesonsVideo: ' ',
                },
                {
                    name: 'How to do catfish',
                    total_time: '1:15',
                    image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
                    lesonsVideo: ' ',
                },
            ]
        }
    ]


    const searchProps = {
        navigation,
        // onClose,
        infor,
        lessonResult,
        programResult
    }

    return <SearchMainView{...searchProps}/>
}

export default SearchContainer;