'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import style from './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className={style.appContainer}>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    <div className={style.infoContainer}>
      {isFetching && <div className={style.loader}><p>carregando...</p></div>}
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      <div className={style.reposBoxes}>
        {!!repos.length &&
          <Repos
            title='Repositórios'
            repos={repos}
            />
        }

        {!!starred.length &&
          <Repos
            title='Favoritos'
            repos={starred}
            />
        }
      </div>
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
