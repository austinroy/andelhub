import fetch from 'isomorphic-fetch';

export const fetchMembersSuccess = (members) => {
    return {
        type: 'FETCH_MEMBERS_SUCCESS',
        members
    }
}

export const fetchMembers = () => dispatch => {
    fetch('https://api.github.com/orgs/andela/members', {
        method:'GET'
    })
        .then(res =>{
            if (!res.ok){
                Promise.reject.bind(Promise);
                return
            }
            return res.json();
        })
        .then(members => {
            console.log("Successfully fetched members")
            dispatch(fetchMembersSuccess(members));
        })
}
