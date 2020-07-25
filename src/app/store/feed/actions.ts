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
        'https://newsapi.org/v2/everything?domains=washingtonpost.com,nytimes.com&apiKey=9eeef8086b0b415d81ab3ce24d0fd2e8',
      )
      .then(res => {
        console.log(res)
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
