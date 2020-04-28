const initialStatus = {
    status : false,
    loading: false,
    dishes: [],
    error: null,
    category: '',
    search: '',
    categories: [],
    dish: {}
}

const homePageReducers = (state = initialStatus, action) => {
    switch(action.type) {
        case "SET_HOMEPAGE": 
            return {
                ...state,
                status: action.value
            }
        case "SET_LOADING" :
            return {
                ...state,
                loading: action.value
            }
        case "SET_DISHES" :
            return {
                ...state,
                dishes: action.value
            }
        case "SET_ERROR" :
            return {
                ...state,
                error: action.value
            }
        case "SET_CATEGORY" :
                return {
                    ...state,
                    category: action.value
                }
        case "SET_SEARCH_WORD" : 
                return {
                    ...state,
                    search: action.value
                }
        case "SET_CATEGORIES": 
                return {
                    ...state,
                    categories: action.value
                }
        case "SET_DISH" : 
                return {
                    ...state,
                    dish: action.value
                }
        default: 
            return state
    }

}

export default homePageReducers