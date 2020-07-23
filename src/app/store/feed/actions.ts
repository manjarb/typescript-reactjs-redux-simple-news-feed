import { IFetchNewsParams, IFetchNewsAction, FETCH_NEWS } from './types'

export function fetchMessage(params: IFetchNewsParams): IFetchNewsAction {
  return {
    type: FETCH_NEWS,
    payload: {
      page: params.page,
    },
  }
}
