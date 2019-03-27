import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
        this.toggleHighlight = this.toggleHighlight.bind(this);
    }

    toggleHighlight(e) {
       this.setState({
           isActive: !this.state.isActive
       });
    }

    render() {
        const toggleClass = this.state.isActive ? 'active' : 'inactive';
        return (
            <div className={toggleClass}
                onMouseOver={this.toggleHighlight} 
                onMouseOut={this.toggleHighlight}>
                    <div>{this.props.name}</div>
                    <div className={this.state.isActive ? 'show bestQuality' : 'hide'}>{this.props.bestQuality}</div>
            </div>
        );
    }
}