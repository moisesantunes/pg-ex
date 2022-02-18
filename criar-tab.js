const { Pool, Client } = require('pg')
//const client = new Client()
const pool = new Pool({
	user: 'moises',
	// host: 'database.server.com',
	database: 'dbteste',
	password: '12345',
	//  port: 3211,
});
const tarefa= {
	text:'CREATE TABLE pessoas(nome varchar(30), sobrenome varchar(30),idade int);'
}
pool.query(tarefa,(err,res)=>{
	if(err)console.log("deu ruim : ", err)
	console.log(res)
})

