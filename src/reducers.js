export const initialState = {
    user: null,
    history:[],
    trend: '',
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
        case 'SET_TREND':
            return {
                ...state,
                trend: action.trend
            }
        default:
            return {...state}
    }
}

export default reducer;