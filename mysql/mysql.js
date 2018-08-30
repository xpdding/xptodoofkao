const config = require('../config/config')
const mysql = require('mysql')

const pool = mysql.createPool({
  host: config.Dbinfo.host,
  password: config.Dbinfo.password,
  user: config.Dbinfo.user,
  port: config.Dbinfo.port,
  database: config.Dbinfo.database
})

let query = (sql, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        PromiseRejectionEvent(err)
      } else {
        conn.query(sql, value, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          conn.release()
        })
      }
    })
  })
}

exports.findAllUsers = () => {
  let _sql = 'select * from userinfo;'
  return query(_sql)
}