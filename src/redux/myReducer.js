const initialState = {
    members: []
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'FETCH_MEMBERS_SUCCESS':
            return Object.assign({}, state, {
                members: action.members
            })
        default:
            return state
    }
}