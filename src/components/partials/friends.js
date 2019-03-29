import React from 'react';
import Friend from './friend';
import withLoader from '../higher-order-components/withLoader';
import { connect } from 'react-redux';


const friends = props => {
    if (props.friendList.length === 0) {
        return (
            <div className="friends-wrapper">
                <h1 className="header">Friends</h1>
                <h2>All friends invited! Yay!! :) :) </h2>
            </div>
        )
    }
    const friendComponents = props.friendList.map(friend => {
        return (
            <div className="friend-name" key={friend.id}>
                <Friend {...friend} />
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


export default connect(state => {
    return {
        friendList: state.friendList
    }
})(withLoader(friends));
