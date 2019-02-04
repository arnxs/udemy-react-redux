import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    avatar={faker.image.avatar()}
                    comment="Hi"
                    timeAgo="1hr ago"
                />
            </ApprovalCard>
            <CommentDetail
                author="Alex"
                avatar={faker.image.avatar()}
                comment="Hello World"
                timeAgo="3hrs ago"
            />
            <CommentDetail
                author="Jane"
                avatar={faker.image.avatar()}
                comment="Yolo"
                timeAgo="5min ago"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
