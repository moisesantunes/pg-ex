const { Pool, Client } = require('pg')
//const client = new Client()
const pool = new Pool({
	user: 'moises',
	// host: 'database.server.com',
	database: 'dbteste',
	password: '12345',
	//  port: 3211,
});
/*
const tarefa= {
	text:'CREATE TABLE pessoas(nome varchar(30), sobrenome varchar(30),idade int);'
}
*/
/*
const insPessoa={
	text:"insert into pessoas(nome, sobrenome, idade) values($1,$2,$3)",
	values:["Moisés","Antues",40]
}
*/
/*
const sonome= {
	text:"select nome from pessoas;"
}
*/
/*
const umaPessoa={
	text:"select * from pessoas where nome='Moisés' "
}
*/
/*
const pessoafiltro={
	text:"select * from pessoas where idade < 30"
}
*/
const pessoasorganizadas={
	text:"select * from pessoas order by nome"
}
pool.query(pessoasorganizadas, (err,res)=>{
	if(err)console.log("deu ruim : ", err)
	console.log(res.rows)
})

