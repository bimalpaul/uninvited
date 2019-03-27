import React from 'react';
import withLoader from '../higher-order-components/withLoader';

const invitedGuests =  () => 
    <div className="invited-guests-wrapper">
        <div className="header">Invited Guests</div>
        <div>No one invited. :( </div>
    </div>


export default withLoader(invitedGuests);