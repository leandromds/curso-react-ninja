'use strict'

import React, { PropTypes } from 'react'
import style from './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div>
    <hr />
    <div className={style.actions}>
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
