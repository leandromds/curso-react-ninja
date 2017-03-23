'use strict'

import React, { PropTypes } from 'react'
import style from './repos.css'

const Repos = ({ title, repos }) => (
  <div className={style.repos}>
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

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
