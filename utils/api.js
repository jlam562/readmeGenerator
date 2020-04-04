const axios = require('axios')

const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
    .catch(e) {
      console.error(e)
      )
    }
  }
}

module.exports = api;
