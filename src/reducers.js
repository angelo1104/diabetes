export const initialState = {
    user: null,
    history:[],
}

const reducer = (state,action)=>{
    console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'SET_HISTORY':
            return {
                ...state,
                history: action.history
            }
        default:
            return {...state}
    }
}

export default reducer;