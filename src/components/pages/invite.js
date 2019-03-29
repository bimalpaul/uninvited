import React, { useEffect } from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import { usersEndpoint } from '../../config';
import { loaderPath1, loaderPath2 } from "../../config";
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';

const invitePage = props => {

    useEffect(() => {
        fetch(usersEndpoint)
            .then(res => res.json())
            .then(props.onFetchResolve);  
        props.onFetchStart();    
    }, []);

    return (
        <div className="invite-page">
            <h2 className="page-header">Guest List</h2>
            <div className="invited-guests">
                    <InvitedGuests 
                        loaded={props.isDataLoaded} 
                        gifPath={loaderPath1} 
                        />
                </div>
                <div className="friends">
                    <Friends 
                        loaded={props.isDataLoaded} 
                        gifPath={loaderPath2} 
                        />
                </div>
        </div>
    ); 
};

const mapStateToProps = state => {
    return {
        isDataLoaded: state.isDataLoaded
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchStart: () => {
            dispatch({
                type: actionTypes.FRIENDS_LOADING
            });
        },
        onFetchResolve: jsonResponse => {
            dispatch({
                type: actionTypes.FRIENDS_LOADED,
                payload: jsonResponse
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(invitePage);

