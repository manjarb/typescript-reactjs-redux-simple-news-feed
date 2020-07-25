import React from 'react'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <div className="navbar-item">
              <strong>US News</strong>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" />
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
