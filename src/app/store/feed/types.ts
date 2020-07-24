export const FETCH_NEWS = 'FETCH_NEWS'
export const UPDATE_NEWS = 'UPDATE_NEWS'

export interface IFeedItem {
  source: {
    id: string | null
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface IFeedState {
  loading: boolean
  total: number
  entites: {
    [key: number]: IFeedItem[]
  } | null
}

export interface IFetchNewsParams {
  page: number
}

export interface IFetchNewsAction {
  type: typeof FETCH_NEWS
  payload: IFetchNewsParams
}

export interface IUpdateNewsAction {
  type: typeof UPDATE_NEWS
  payload: {
    loading: false
    page: number
    data: IFeedItem[]
  }
}

export type IFeedActionTypes = IFetchNewsAction | IUpdateNewsAction
