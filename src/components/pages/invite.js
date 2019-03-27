import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';

export default class InvitePage extends React.Component {
    render () {
        return (
            <div className="invite-page">
                <div className="page-header">Guest List</div>
                <div className="invited-guests">
                    <InvitedGuests />
                </div>
                <div className="friends">
                    <Friends />
                </div>
            </div>
        )
    };
}

