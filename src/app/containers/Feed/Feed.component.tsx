import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { fetchNews } from 'src/app/store/feed/actions'
import { IFeedEntities } from 'src/app/store/feed/types'
import { RootState } from 'src/app/store/root'
import { Loading } from 'src/app/components/Loading/Loading.component'
import { Header } from 'src/app/components/Header/Header.component'
import { NewsCard } from 'src/app/components/NewsCard/NewsCard.component'

export const Feed: React.FC<ConnectedProps<typeof connector>> = ({ feed, fetchNews }) => {
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    fetchNews({
      page,
      pageSize: 100,
    })
  }, [])

  const { entities, loading } = feed

  return (
    <div>
      <Header />
      {loading && (
        <div className="p-t-30">
          <Loading />
        </div>
      )}

      {!loading && (
        <div className="container p-t-30 p-b-30">
          <div className="columns is-multiline">
            {entities &&
              ((Object.keys(entities) as unknown) as Array<keyof IFeedEntities>).map(key => {
                return entities[key].map(entity => {
                  const { source, title, description, urlToImage, publishedAt } = entity
                  return (
                    <div
                      key={entity.title}
                      className="column is-4-desktop is-6-tablet is-12-mobile"
                    >
                      <NewsCard
                        sourceName={source.name}
                        published={publishedAt}
                        image={urlToImage}
                        title={title}
                        description={description}
                      />
                    </div>
                  )
                })
              })}
          </div>
        </div>
      )}
    </div>
  )
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
