import {showReducer} from './show/reducer'
import {combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    show: showReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)