import ScheduleMainView from "./views/ScheduleMainView";

const ScheduleContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const lessonInDatetime = [
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
        {
            lessonName: 'How to do catfish',
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

    const propsSchedule = {
        navigation,
        lessonInDatetime
    };

    return <ScheduleMainView{...propsSchedule} />
}

export default ScheduleContainer;