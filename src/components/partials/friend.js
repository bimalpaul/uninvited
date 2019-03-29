import React from 'react';
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';
import toggle from '../../hooks/toggle';

const friend = props => {
    const [isActive, setIsActive]  = toggle(false);
    const toggleHighlight = () => setIsActive(!isActive);
    const toggleClass = isActive ? 'active' : 'inactive';
    return (
        <div className={toggleClass}
            onMouseOver={toggleHighlight} 
            onMouseOut={toggleHighlight}
            onClick={props.onFriendClick}>
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
        onFriendClick: () => {
            dispatch({
                type: actionTypes.FRIEND_SELECTED,
                payload: ownProps
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(friend);