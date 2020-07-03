const {Pool} = require('pg')

const pool = new Pool({
  user: "Abdullah",
  host : "localhost",
  database : "goodReads1",
  password : "123321",
  port : 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


module.exports = pool