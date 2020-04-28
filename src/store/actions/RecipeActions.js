import axios from 'axios'

const homePageActions = (status) => {
    return {
        type: 'SET_HOMEPAGE',
        value: status
    }
}

export const setLoading = (value) => {
    return {
        type: 'SET_LOADING',
        value: value
    }
}

export const setDishes = (value) => {
    return {
        type: 'SET_DISHES',
        value: value
    }
}

export const setError = (value) => {
    return {
        type: 'SET_ERROR',
        value: value
    }
}

export const setCategoryName = (value) => {
    return {
        type: 'SET_CATEGORY',
        value: value
    }
}

export const setCategories = (value) => {
    return {
        type: 'SET_CATEGORIES',
        value: value
    }
}

export const setSearchWord = (value) => {
    return {
        type: 'SET_SEARCH_WORD',
        value: value
    }
}

export const setDish = (value) => {
    return {
        type: 'SET_DISH',
        value: value
    }
}

export const fetchDishes = (value) => {
    return function(dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'get',
            url: `${value.url}${value.params}`
        })
            .then(({ data }) => {
                if(data.meals) {
                    console.log(data)
                    console.log('masuk ke sini nih')
                    dispatch(setDishes(data.meals))
                } else {
                    console.log('masuk ke error')
                    dispatch(setError(`Data with key ${value.params} not found`))
                }
            })
            .catch(({ response }) => {
                dispatch(setError(`Data with key ${value.params} not found`))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const fetchCategories = (value) => {
    return function(dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php'
        })
            .then(({ data }) => {
                if(data.categories) {
                    dispatch(setCategories(data.categories))
                } else {
                    dispatch(setError(`Categories is not found`))
                }
            })
            .catch(({ response }) => {
                dispatch(setError(`Categories is not found`))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const fetchDishData = (value) => {
    return function(dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value}`
        })
            .then(({ data }) => {
                if(data.meals) {
                    dispatch(setDishes(data.meals))
                } else {
                    dispatch(setError(`Dish is not found`))
                }
                // console.log(data.meals)
                // dispatch(setDish(data.meals))
            })
            .catch(({ response }) => {
                dispatch(setError(`Dish is not found`))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}


export default homePageActions 
// export default setCategory
// export default setCategory
// export default setLoading