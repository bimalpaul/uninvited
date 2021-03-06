import React from 'react';
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';
import toggle from '../../hooks/toggle';

const invitedFriend = props => {
    const [isActive, setIsActive]  = toggle(false);
    const toggleHighlight = () => setIsActive(!isActive);
    const toggleClass = isActive ? 'active' : 'inactive';
    return (
        <div className={`${toggleClass} sad-face`}
            onMouseOver={toggleHighlight} 
            onMouseOut={toggleHighlight}
            onClick={props.onInvitedFriendClick}>
                <div>{props.username}</div>
                <div className={isActive ? 'show fullname ' : 'hide'}>
                    <span className="friend-name">{props.name}</span>from
                    <span className="friend-city"> {props.address.city}</span>
                </div>
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