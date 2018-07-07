'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'
import './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <h1>Search users in github</h1>
    <input
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
