const initialState = [

]

const addFavoriteReducers = (state = initialState, action) => {
    switch(action.type){
        case "ADD_FAVORITE":
            return [
                ...state,
                {
                    id: state.length + 1,
                    idMeal: action.value
                }
            ]
        default:
            return state
    }
}

export default addFavoriteReducers