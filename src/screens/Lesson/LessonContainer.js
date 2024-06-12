import React from 'react';
import LessonMainView from "./views/LessonmainView";

const LessonContainer = (props) => {
    const { navigation, isOwner} = props;

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

    const participants = [
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Anh Khoa",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Hoai Thuong",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Ngoc han",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Anh Khoa",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Anh Khoa",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Hoai Thuong",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Ngoc han",
        },
        {
            image_link: "https://sab.org/wp-content/uploads/2020/04/190508_sab_5222-scaled-e1588882431127.jpg",
            name: "Anh Khoa",
        },


    ]
    const propsLesson = {
        navigation,
        isOwner,
        comments,
        participants,
    };


    return <LessonMainView{...propsLesson} />;
}

export default LessonContainer;
