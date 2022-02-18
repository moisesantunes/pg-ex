const { Pool, Client } = require('pg')
//const client = new Client()

const pool = new Pool({
  user: 'moises',
 // host: 'database.server.com',
  database: 'dbteste',
  password: '12345',
//  port: 3211,
});
//client.connect()
/*
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})
*/

const query = {
  text: 'INSERT INTO cidades(nome, cod) VALUES($1, $2)',
  values: ['Bahia', 225],
}
const pesquisa={
	text: 'select * from cidades'
}

pool.query(pesquisa, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows)
  }
})
