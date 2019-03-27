import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import LoadingGif from '../partials/loadingGif';
import { usersEndpoint } from '../../config';

export default class InvitePage extends React.Component {
    state = {
        isDataLoaded: false,
        friendList: {}
    }

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
        let toRender = <LoadingGif />
        if (this.state.isDataLoaded) {
            toRender = (
                <div className="wrapper">
                    <div className="invited-guests">
                        <InvitedGuests />
                    </div>
                    <div className="friends">
                        <Friends friendList={this.state.friendList}/>
                    </div>
                </div>
            );
        }
        return (
            <div className="invite-page">
                <div className="page-header">Guest List</div>
                {toRender}
            </div>
            );
        
    };
}

