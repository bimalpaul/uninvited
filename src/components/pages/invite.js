import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import { usersEndpoint } from '../../config';
import withLoader from '../higher-order-components/withLoader';
import { loaderPath1, loaderPath2 } from "../../config";


const InvitedListWithLoader = withLoader(InvitedGuests);
const FriendsWithLoader = withLoader(Friends);

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
                        <InvitedListWithLoader loaded={this.state.isDataLoaded} gifPath={loaderPath1}/>
                    </div>
                    <div className="friends">
                        <FriendsWithLoader loaded={this.state.isDataLoaded} friendList={this.state.friendList} gifPath={loaderPath2}/>
                    </div>
            </div>
        );     
    };
}

