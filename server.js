const http = require(`http`);

const host = '127.0.0.1';

const port = 3000;

const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    database: 'baseshop',
    password: 'admin'
});

connection.connect((err)=>{
    if (err){
        console.log('Error Database')
    }else{
        console.log('Success Database')
    }
})

const server = http.createServer((reg, res)=>{
  if(reg.url == '/main'){
    res.statusCode = 200;
    res.end('success')
  }else{
    res.statusCode = 404;
    res.end('error')
  }
});

server.listen(port,host, ()=>{
    console.log(`серер запущен! http://${host}:${port}`);
})