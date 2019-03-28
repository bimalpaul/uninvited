import React from 'react';
import Friend from './friend';
import withLoader from '../higher-order-components/withLoader';

const friends = props => {
    const friendComponents = props.friendList.map(friend => {
        return (
            <div className="friend-name" key={friend.username}>
                <Friend {...friend} dispatch={props.dispatch}/>
            </div>
        );
    });

    return (
        <div className="friends-wrapper">
            <h1 className="header">Friends</h1>
            <div>{friendComponents}</div>
        </div>
    );
}

export default withLoader(friends);
