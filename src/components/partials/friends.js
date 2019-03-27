import React from 'react';
import Friend from './friend';

const friends = [
    {
        name: 'Cersei Lannister',
        bestQuality: 'Cold.'
    },
    {
        name: 'Jon Snow',
        bestQuality: 'Inherently good. Honorable.'
    },
    {
        name: 'Samwell Tarly',
        bestQuality: 'Reads. A lot... Smart'
    },
    {
        name: 'Brienne of Tarth',
        bestQuality: 'Honorable'
    },
    {
        name: 'Daenerys Targaryen',
        bestQuality: 'Has 2 dragons. Fearless.'
    },
    {
        name: 'Tyrion Lannister',
        bestQuality: 'He drinks and he knows things...'
    },
    {
        name: 'Arya Stark',
        bestQuality: 'She is Arya Stark. She is also noone.'
    }
];

export default () => {
    const friendComponents = friends.map(friend => {
        return (
            <div className="friend-name" key={friend.name}>
                <Friend {...friend}/>
            </div>
        );
    });

    return (
        <div className="friends-wrapper">
            <h1 className="header">Friends</h1>
            <div>{friendComponents}</div>
        </div>
    );
}
