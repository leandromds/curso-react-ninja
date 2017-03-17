'use strict'

import React, { PropTypes } from 'react'
import style from './user-info.css'

const UserInfo = ({ userinfo }) => (
  <div className={style.userInfo}>
    <img src={userinfo.photo} alt='Minha imagem' />

    <div>
      <h1 className='title tile'>
        <a href={`https://github.com/${userinfo.login}`} target='_blank'>{userinfo.username}</a>
      </h1>
      <div className='tile'>
        <ul className='repos-info'>
          <li> Repositórios: {userinfo.repos}</li>
          <li> Seguidores: {userinfo.followers}</li>
          <li> seguindo: {userinfo.following}</li>
        </ul>
      </div>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
