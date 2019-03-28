import React from 'react';
import withLoader from '../higher-order-components/withLoader';
import InvitedFriend from '../partials/invitedFriend';

const invitedGuests = props => {
    if(props.invitedFriends.length === 0) {
        return (
            <div className="friends-wrapper">
                <h1 className="header">Invited Guests</h1>
                <h2>No one is invited... :( :( </h2>
            </div>
        );
    }
    const invitedFriendComponents = props.invitedFriends.map(friend => {
        return (
            <div className="friend-name" key={friend.username}>
                <InvitedFriend {...friend} dispatch={props.dispatch}/>
            </div>
        );
    });

    return (
        <div className="friends-wrapper">
            <h1 className="header">Invited Guests</h1>
            <div>{invitedFriendComponents}</div>
        </div>
    );
}

export default withLoader(invitedGuests);