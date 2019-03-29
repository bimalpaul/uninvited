import React from 'react';
import './invite.css';
import InvitedGuests from '../partials/invitedGuests';
import Friends from '../partials/friends';
import { usersEndpoint } from '../../config';
import { loaderPath1, loaderPath2 } from "../../config";
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';
class InvitePage extends React.Component {

    componentDidMount() {
        fetch(usersEndpoint)
            .then(res => res.json())
            .then(this.props.onFetchResolve);  
        this.props.onFetchStart();    
    }

    render () {
        return (
            <div className="invite-page">
                <h2 className="page-header">Guest List</h2>
                <div className="invited-guests">
                        <InvitedGuests 
                            loaded={this.props.isDataLoaded} 
                            gifPath={loaderPath1} 
                            />
                    </div>
                    <div className="friends">
                        <Friends 
                            loaded={this.props.isDataLoaded} 
                            gifPath={loaderPath2} 
                            />
                    </div>
            </div>
        );     
    };
}

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

const ConnectedPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(InvitePage);

export default ConnectedPage;

