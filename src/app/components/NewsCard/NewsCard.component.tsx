import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import styles from './NewsCard.module.scss'

interface INewsCard {
  sourceName: string
  published: string
  image: string
  title: string
  description: string
}

export const NewsCard: React.FC<INewsCard> = ({
  sourceName,
  published,
  image,
  title,
  description,
}) => {
  return (
    <div className={`card ${styles.container}`}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className={styles.avartar}>
              <strong className="text-white is-size-4">{sourceName[0]}</strong>
            </div>
          </div>
          <div className="media-content">
            <p className="title is-size-6">{sourceName}</p>
            <p className="subtitle is-size-6 text-date">
              {moment(published).format('YYYY-MM-DD hh:mm')}
            </p>
          </div>
        </div>

        <div className={styles.image}>{image && <img src={image} alt={title} />}</div>

        <div className="content p-t-15">
          <p className={`is-size-4 m-b-15 ${styles.title}`}>{title}</p>
          <div className={styles.description}>{parse(description)}</div>
        </div>
      </div>
    </div>
  )
}
