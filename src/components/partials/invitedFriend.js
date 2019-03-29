import React, { useState } from 'react';
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';

const invitedFriend = props => {
    const [isActive, setIsActive]  = useState(false);
    const toggleHighlight = () => setIsActive(!isActive);
    const toggleClass = isActive ? 'active' : 'inactive';
    return (
        <div className={toggleClass}
            onMouseOver={toggleHighlight} 
            onMouseOut={toggleHighlight}
            onClick={props.onInvitedFriendClick}>
                <div>{props.username}</div>
                <div className={isActive ? 'show fullname ' : 'hide'}>{props.name}</div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onInvitedFriendClick: () => {
            dispatch({
                type: actionTypes.FRIEND_UNSELECTED,
                payload: ownProps
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(invitedFriend);