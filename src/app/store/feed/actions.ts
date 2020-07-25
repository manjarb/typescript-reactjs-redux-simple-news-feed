import { AppThunk } from './../root/index'
import axios from 'axios'
import {
  IFetchNewsParams,
  IFetchNewsAction,
  NewsAction,
  IFetchNewsSuccess,
  IFetchNewsActionPayload,
  IFetchNewsResponse,
} from './types'

function fetchingNews(): IFetchNewsAction {
  return {
    type: NewsAction.FetchNews,
  }
}

function fetchNewsSucccess(payload: IFetchNewsActionPayload): IFetchNewsSuccess {
  return {
    type: NewsAction.FetchNewsSuccess,
    payload,
  }
}

export function fetchNews(params: IFetchNewsParams): AppThunk<void> {
  return dispatch => {
    dispatch(fetchingNews())
    axios
      .get<IFetchNewsResponse>(
        `https://newsapi.org/v2/everything?domains=washingtonpost.com,nytimes.com&page=${params.page}&pageSize=${params.pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`,
      )
      .then(res => {
        const { articles, totalResults } = res.data
        dispatch(
          fetchNewsSucccess({
            page: params.page,
            total: totalResults,
            data: articles,
          }),
        )
      })
      .catch(() => {
        alert('Fail Get news')
      })
  }
}
