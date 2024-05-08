import React from 'react';
import CommunityDetailScreen from "./views/CommunityDetailScreen";

const CommunityContainer = (props) => {
    const {
        navigation,
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

    return (
        <CommunityDetailScreen
            comments={comments}
            navigation={navigation}
        />
    );
}

export default CommunityContainer;
