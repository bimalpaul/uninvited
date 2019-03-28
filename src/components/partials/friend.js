import React from 'react';
import actionTypes from '../../state/actionTypes';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleHighlight = this.toggleHighlight.bind(this);
        this.friendClickHandler = this.friendClickHandler.bind(this);
    }

    toggleHighlight(e) {
       this.setState({
           isActive: !this.state.isActive
       });
    }

    friendClickHandler(e) {
        this.props.dispatch({
            type: actionTypes.FRIEND_SELECTED,
            payload: this.props
        })
    }

    render() {
        const toggleClass = this.state.isActive ? 'active' : 'inactive';
        return (
            <div className={toggleClass}
                onMouseOver={this.toggleHighlight} 
                onMouseOut={this.toggleHighlight}
                onClick={this.friendClickHandler}>
                    <div>{this.props.username}</div>
                    <div className={this.state.isActive ? 'show fullname ' : 'hide'}>{this.props.name}</div>
            </div>
        );
    }
}