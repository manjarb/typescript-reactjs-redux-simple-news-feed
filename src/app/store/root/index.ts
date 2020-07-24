import { combineReducers } from 'redux'
import { feedReducer } from '../feed/reducers'

export const rootReducer = combineReducers({
  feed: feedReducer,
})

export type RootState = ReturnType<typeof rootReducer>
