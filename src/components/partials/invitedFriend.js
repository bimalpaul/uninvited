import React from 'react';
import actionTypes from '../../state/actionTypes';
import { connect } from 'react-redux';
class invitedFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleHighlight = this.toggleHighlight.bind(this);
        this.guestClickHandler = this.guestClickHandler.bind(this);
    }

    toggleHighlight(e) {
       this.setState({
           isActive: !this.state.isActive
       });
    }

    guestClickHandler(e) {
        this.props.dispatchClick();
    }

    render() {
        const toggleClass = this.state.isActive ? 'active' : 'inactive';
        return (
            <div className={toggleClass}
                onMouseOver={this.toggleHighlight} 
                onMouseOut={this.toggleHighlight}
                onClick={this.guestClickHandler}>
                    <div>{this.props.username}</div>
                    <div className={this.state.isActive ? 'show fullname ' : 'hide'}>{this.props.name}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchClick: () => {
            dispatch({
                type: actionTypes.FRIEND_UNSELECTED,
                payload: ownProps
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(invitedFriend);