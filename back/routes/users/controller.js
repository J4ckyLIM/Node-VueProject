const User = require('../../models/user')

module.exports = {
  /**
   * Query the database to get all the societies
   * @returns {object} result from the database query
   */
  addUser: (req, res) => {
    res.status(200).send({msg: 'New user created'})
    console.log("addUser is called")
  },

  loginUser: (req, res) => {
    res.status(200).send({msg: 'User is now logged', data: 'token' })
    console.log("loginUser is called")
  }
    
};