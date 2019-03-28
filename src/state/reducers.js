import actionTypes from "./actionTypes";

const initialState = {
    isDataLoaded: false,
    friendList: [],
    selectedFriend: {},
    invitedFriends: []
}

const isDataLoaded = (state = initialState.isDataLoaded, action) => {
    switch (action.type) {
        case actionTypes.FRIENDS_LOADING : 
            return false;
        case actionTypes.FRIENDS_LOADED : 
            return true;
        default: 
            return state;
    }
}

const friendList =  (state = initialState.friendList, action) => {
    switch (action.type) {
        case actionTypes.FRIENDS_LOADED : 
            return action.payload;
        case actionTypes.FRIEND_SELECTED :
            const newState =  state.filter(s => s.name !== action.payload.name);
            return newState;
        case actionTypes.FRIEND_UNSELECTED :
            return [...state, action.payload];
        default: 
            return state;    
    }
}

const selectedFriend = (state = initialState.selectedFriend, action) => {
    switch (action.type) {
        case actionTypes.FRIEND_SELECTED :
            return action.payload;
        default:
            return state;    
    }
}

const invitedFriends = (state = initialState.invitedFriends, action) => {
    switch (action.type) {
        case actionTypes.FRIEND_SELECTED :
            return [...state, action.payload];
        case actionTypes.FRIEND_UNSELECTED :
            const newState =  state.filter(s => s.name !== action.payload.name);
            return newState;     
        default:
            return state;    
    }
}

export {isDataLoaded, selectedFriend, invitedFriends, friendList}
