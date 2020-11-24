const pool = require('./../config/pgsql.config.js')

module.exports = class User {
  /**
   * User class
   * @param {string} email - email string
   * @param {string} password - a password
   * @property {string} email - a email.
   * @property {string} password - a phone.
   */
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  /**
   * Query to create a new user in the database
   * @param {function} [callback] - Callback function
   */
  createUser(callback) {
    let sql = 'INSERT INTO users (email, password) VALUES ($1, $2)' 
    pool.query(sql, [this.email, this.password], (err, result) => {
      if(err) {
        if(callback) callback(err, null)
      }
      if(result) {
        if(callback) callback(null, result)
      } 
    })
  }

  /**
   * Query database to retrieve the information about a user using its email
   * @param {object} payload - Object containing information given from the frontend
   * @param {function} [callback] - Callback function
   */
  static loginUser = (payload, callback) => {
    console.log("login user")
    callback(null, 'hello');
  }
};