import React from 'react';
import withLoader from '../higher-order-components/withLoader';
import InvitedFriend from '../partials/invitedFriend';
import { connect } from 'react-redux';

const invitedGuests = props => {
    if (props.invitedFriends.length === 0) {
        return (
            <div className="friends-wrapper">
                <h1 className="header">Invited Guests</h1>
                <h2>No one is invited... :( :( </h2>
            </div>
        );
    }
    
    const invitedFriendComponents = props.invitedFriends.map(friend => 
        <div className="friend-name" key={friend.id}>
            <InvitedFriend {...friend} />
        </div> 
    );

    return (
        <div className="friends-wrapper">
            <h1 className="header">Invited Guests</h1>
            <div>{invitedFriendComponents}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        invitedFriends: state.invitedFriends
    };
};

export default connect(mapStateToProps)(withLoader(invitedGuests));