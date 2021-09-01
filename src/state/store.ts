import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {counterReducer} from "./counter-reducer";


const rootReducer = combineReducers({
    count: counterReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>