import { combineReducers, Action } from 'redux'
import { feedReducer } from '../feed/reducers'
import { ThunkAction } from 'redux-thunk'

export type AppThunk<ReturnType = void, A = string> = ThunkAction<
  // Return type for dispatch action
  ReturnType,
  RootState,
  unknown,
  // Action type ex. FETCH_NEWS
  Action<A>
>

export const rootReducer = combineReducers({
  feed: feedReducer,
})

export type RootState = ReturnType<typeof rootReducer>
