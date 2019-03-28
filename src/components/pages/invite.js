import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import { usersEndpoint } from '../../config';
import { loaderPath1, loaderPath2 } from "../../config";
import store from '../../state/store';
import actionTypes from '../../state/actionTypes';

export default class InvitePage extends React.Component {

    state = store.getState();

    componentDidMount() {

        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });

        fetch(usersEndpoint)
            .then(res => res.json())
            .then(jsonResponse => {
                store.dispatch({
                    type: actionTypes.FRIENDS_LOADED,
                    payload: jsonResponse
                });
            });

        store.dispatch({
            type: actionTypes.FRIENDS_LOADING
        });    
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render () {
        return (
            <div className="invite-page">
                <div className="page-header">Guest List</div>
                <div className="invited-guests">
                        <InvitedGuests 
                            loaded={this.state.isDataLoaded} 
                            gifPath={loaderPath1} 
                            dispatch={store.dispatch.bind(store)}
                            invitedFriends={this.state.invitedFriends}/>
                    </div>
                    <div className="friends">
                        <Friends 
                            loaded={this.state.isDataLoaded} 
                            friendList={this.state.friendList} 
                            gifPath={loaderPath2} 
                            dispatch={store.dispatch.bind(store)}/>
                    </div>
            </div>
        );     
    };
}

