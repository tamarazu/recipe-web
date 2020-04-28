import { combineReducers } from 'redux'
import addFavoriteReducers from './addFavoriteReducers'
import homePageReducers from './homePageReducers'

const rootReducers = combineReducers({
    favorites : addFavoriteReducers,
    homePage : homePageReducers
})

export default rootReducers

