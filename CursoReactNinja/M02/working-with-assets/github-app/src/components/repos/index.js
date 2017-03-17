'use strict'

import React, { PropTypes } from 'react'
import style from './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={`${className} tile is-vertical`}>
    <h2>{title}:</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link} target='_blank'>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: 'tile is-vertical'
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
