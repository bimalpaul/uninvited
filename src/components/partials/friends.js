import React from 'react';
import Friend from './friend';
export default class extends React.Component {
    friendComponents = this.props.friendList.map(friend => {
        return (
            <div className="friend-name" key={friend.username}>
                <Friend {...friend}/>
            </div>
        );
    });

    render() {
        return (
            <div className="friends-wrapper">
                <h1 className="header">Friends</h1>
                <div>{this.friendComponents}</div>
            </div>
        );
    }
}
