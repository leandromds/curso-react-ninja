'use strict'

import React, { Component } from 'react'
import AppContent from 'components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGithubAPIUrl (username, type) {
    const _username = username ? `/${username}` : ''
    const _type = type ? `/${type}` : ''
    return `https://api.github.com/users${_username}${_type}`
  }

  handleSearch (e) {
    const _username = e.target.value
    const keyCode = e.which || e.keyCode
    const enterKey = 13

    if (keyCode === enterKey) {
      this.setState({isFetching: true})
      fetch(this.getGithubAPIUrl(_username))
        .then(response => response.json())
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
          this.setState({ isFetching: false })
        })
        .catch((error) => {
          console.log(`Erro : ${error}`)
        })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      fetch(this.getGithubAPIUrl(username, type))
        .then(response => response.json())
        .then(result => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
