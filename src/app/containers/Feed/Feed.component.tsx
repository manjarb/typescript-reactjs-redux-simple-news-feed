import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { fetchNews } from 'src/app/store/feed/actions'
import { RootState } from 'src/app/store/root'
import { Loading } from 'src/app/components/Loading/Loading.component'

export const Feed: React.FC<ConnectedProps<typeof connector>> = ({ feed, fetchNews }) => {
  useEffect(() => {
    fetchNews({
      page: 1,
    })
  }, [])

  return <div>{feed.loading && <Loading />}</div>
}

const mapStateToProps = (state: RootState /*, ownProps*/) => {
  const { feed } = state
  return {
    feed,
  }
}

const mapDispatchToProps = {
  fetchNews,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Feed)
