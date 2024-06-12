import ScheduleMainView from "./views/ScheduleMainView";

const ScheduleContainer = (props) => {
    const { 
        navigation,
        
    } = props;

    const lessonInDatetime = [
        {
            name: 'How to do plete',
            total_time: '1:15',
            image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
            video_link: ' ',
        },
        {
            name: 'How to do catfish',
            total_time: '1:15',
            image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
            video_link: ' ',
        },
        {
            name: 'How to do catfish',
            total_time: '1:15',
            image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
            video_link: ' ',
        },
        {
            name: 'How to do catfish',
            total_time: '1:15',
            image_link: 'https://toquoc.mediacdn.vn/Upload/Article/Langkinh/2016/6/14/rez_674_maxresdefault3.jpg',
            video_link: ' ',
        },
    ]

    const propsSchedule = {
        navigation,
        lessonInDatetime
    };

    return <ScheduleMainView{...propsSchedule} />
}

export default ScheduleContainer;