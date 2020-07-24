import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { fetchNews } from 'src/app/store/feed/actions'
import { RootState } from 'src/app/store/root'

export const Feed: React.FC<ConnectedProps<typeof connector>> = ({ fetchNews }) => {
  useEffect(() => {
    fetchNews({
      page: 1,
    })
  }, [])

  return <h1>Feed</h1>
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
