import {compose,legacy_createStore as createStore,applyMiddleware,Action} from "redux"
import thunk,{ThunkAction,ThunkDispatch} from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {combineReducers} from "redux"


export const rootReducer=combineReducers({

});

export type RootState=ReturnType<typeof rootReducer>

const initialState={

}

const middleware=[thunk]

const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)