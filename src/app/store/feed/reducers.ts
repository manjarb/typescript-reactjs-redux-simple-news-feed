import { IFeedState, IFeedActionTypes, FETCH_NEWS } from './types'

const initialState: IFeedState = {
  loading: false,
  total: 0,
  entites: null,
}

export function feedReducer(state = initialState, action: IFeedActionTypes): IFeedState {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
