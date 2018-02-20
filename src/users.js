import * as a from './action';

function users(state = [], action) {
    switch(action.type) {
        case a.ADD_USER: 
            return [{
                name: action.name,
                id: action.id
            }, ...state]
        default:
            return state;
    }
};


export default users;