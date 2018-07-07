'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import './repos.css'

const Repos = ({ title, repos }) => (
  <div className='repos'>
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
  className: '',
  repos: []
}

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
