import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import { usersEndpoint } from '../../config';
import { loaderPath1, loaderPath2 } from "../../config";

export default class InvitePage extends React.Component {
    state = {
        isDataLoaded: false,
        friendList: {}
    };

    componentDidMount() {
        fetch(usersEndpoint)
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    isDataLoaded: true,
                    friendList: jsonResponse
                })
            });
    }
    render () {
        return (
            <div className="invite-page">
                <div className="page-header">Guest List</div>
                <div className="invited-guests">
                        <InvitedGuests loaded={this.state.isDataLoaded} gifPath={loaderPath1}/>
                    </div>
                    <div className="friends">
                        <Friends loaded={this.state.isDataLoaded} friendList={this.state.friendList} gifPath={loaderPath2}/>
                    </div>
            </div>
        );     
    };
}

