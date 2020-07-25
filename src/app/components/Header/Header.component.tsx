import React from 'react'
import styles from './Header.module.scss'

interface IHeader {
  onSearch: (value: string) => void
}

export const Header: React.FC<IHeader> = ({ onSearch }) => {
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand m-l-0">
            <div className="navbar-item p-l-0">
              <strong>US News</strong>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item p-r-0">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Search"
                  onChange={e => onSearch(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
