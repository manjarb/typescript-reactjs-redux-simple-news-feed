import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styles from './Feed.module.scss'

import { fetchNews } from 'src/app/store/feed/actions'
import { IFeedEntities } from 'src/app/store/feed/types'
import { RootState } from 'src/app/store/root'
import { Loading } from 'src/app/components/Loading/Loading.component'
import { Header } from 'src/app/components/Header/Header.component'
import { NewsCard } from 'src/app/components/NewsCard/NewsCard.component'

export const Feed: React.FC<ConnectedProps<typeof connector>> = ({ feed, fetchNews }) => {
  let page = 1

  useEffect(() => {
    getNews()
    addScrollListener()

    // eslint-disable-next-line
  }, [])

  const trackScrolling = () => {
    const wrappedElement = document.getElementById('feed-container')
    if (wrappedElement && isBottom(wrappedElement) && !loading && page < 10) {
      page += 1
      removeScrollListener()
      getNews().then(() => {
        addScrollListener()
      })
    }
  }

  const addScrollListener = (): void => {
    document.addEventListener('scroll', trackScrolling)
  }

  const removeScrollListener = (): void => {
    document.removeEventListener('scroll', trackScrolling)
  }

  const getNews = (): Promise<void> => {
    return fetchNews({
      page,
      pageSize: 10,
    })
  }

  const isBottom = (el: HTMLElement): boolean => {
    return el.getBoundingClientRect().bottom - 1 <= window.innerHeight
  }

  const { entities, loading } = feed
  return (
    <div className={styles.container}>
      <Header />

      {entities && (
        <div id="feed-container" className="container p-t-30 p-b-30">
          <div className="columns is-multiline">
            {((Object.keys(entities) as unknown) as Array<keyof IFeedEntities>).map(key => {
              return entities[key].map(entity => {
                const { source, title, description, urlToImage, publishedAt, url } = entity
                return (
                  <div key={entity.title} className="column is-4-desktop is-6-tablet is-12-mobile">
                    <NewsCard
                      sourceName={source.name}
                      published={publishedAt}
                      image={urlToImage}
                      title={title}
                      description={description}
                      url={url}
                    />
                  </div>
                )
              })
            })}
          </div>
        </div>
      )}

      {loading && (
        <div className="p-t-30 p-b-30">
          <Loading />
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
