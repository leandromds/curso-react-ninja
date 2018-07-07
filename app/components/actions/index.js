'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div>
    <hr />
    <div className='actions'>
      <button onClick={getRepos}>ver repositórios</button>
      <button onClick={getStarred}>ver favoritos</button>
    </div>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
