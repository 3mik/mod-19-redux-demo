import * as a from './action.js';


function comments(state = [], action) {
    switch(action.type) {
        case a.ADD_COMMENT :
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
        case a.REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case a.EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {text: action.text, ...comment}
                }
                return comment;
            });
        case a.THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        case a.THUMB_DOWN_COMMENT:        
        return state.map(comment => {
            if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
            }
            return comment;
        });               
        default:
            return state;           
    }
};

export default comments;