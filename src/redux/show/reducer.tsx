import {SET_TYPES, Action, typeState} from './types'

const initialState: typeState = {
    showTypes: true
}

export function showReducer(
    state = initialState, 
    action: Action
): typeState{
    
    switch (action.type){
        case SET_TYPES: {
            return { showTypes: !state.showTypes }
        }
        default:
            return state
    }
}