const iState = {
    name: "ramesh",
    wisthes: ['eat','code']
}
const reducer = (state=iState,action) => {    
    if(action.type==='CHANGE_NAME'){
        return{
            ...state,
            name:action.payload
        }
    }
    return state;
}

export default reducer;