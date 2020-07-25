import { IFeedState, IFeedActionTypes, NewsAction } from './types'

const initialState: IFeedState = {
  loading: false,
  total: 0,
  error: null,
  entities: null,
  page: 1,
}

export function feedReducer(state = initialState, action: IFeedActionTypes): IFeedState {
  switch (action.type) {
    case NewsAction.FetchNews:
      return {
        ...state,
        loading: true,
      }
    case NewsAction.FetchNewsSuccess:
      let { entities } = state
      const { total, page, data } = action.payload
      if (entities) {
        entities[page] = data
      } else {
        entities = {
          [page]: data,
        }
      }

      return {
        ...state,
        loading: false,
        error: null,
        total,
        entities,
        page,
      }
    default:
      return state
  }
}
