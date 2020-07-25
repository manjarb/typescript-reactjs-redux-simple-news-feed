export enum NewsAction {
  FetchNews = 'FETCH_NEWS',
  FetchNewsSuccess = 'FETCH_NEWS_SUCCESS',
  UpdateNews = 'UPDATE_NEWS',
}

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

export interface IFeedEntities {
  [key: number]: IFeedItem[]
}

export interface IFeedState {
  loading: boolean
  total: number
  error: null | string
  entities: IFeedEntities | null
  page: number
}

export interface IFetchNewsParams {
  page: number
  pageSize: number
}

export interface IFetchNewsAction {
  type: NewsAction.FetchNews
}

export interface IFetchNewsActionPayload {
  page: number
  total: number
  data: IFeedItem[]
}

export interface IFetchNewsResponse {
  articles: IFeedItem[]
  status: string
  totalResults: number
}

export interface IFetchNewsSuccess {
  type: NewsAction.FetchNewsSuccess
  payload: IFetchNewsActionPayload
}

export type IFeedActionTypes = IFetchNewsAction | IFetchNewsSuccess
