'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      disabled={isDisabled}
      placeholder='Digite o nome do usuário no github'
      onKeyUp={handleSearch}
      />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
