import React from 'react';
import LessonMainView from "./views/LessonmainView";

const LessonContainer = (props) => {
    const {
        navigation,
        lesson
    } = props;

    const comments = [
        {
            user: 'User 1',
            text: 'Bình luận mẫu 1',
            isUser: false,
            replies: []
        },
        {
            user: 'User 2',
            text: 'Bình luận mẫu 2',
            isUser: false,
            replies: [{
                user: 'User 3',
                text: 'Phản hồi mẫu 1',
                isUser: true
            }]
        },
    ];
    const propsLesson = {
        navigation,
        comments,
        lesson,
    };

    return <LessonMainView{...propsLesson} />;
}

export default LessonContainer;
