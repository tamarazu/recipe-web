import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import homePageReducers from './reducers/homePageReducers'
import addFavoriteReducers from './reducers/addFavoriteReducers'

export default createStore(
    combineReducers({
        homePageReducers,
        addFavoriteReducers
    }),
    applyMiddleware(thunk)
) 