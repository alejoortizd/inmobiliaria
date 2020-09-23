const app = require('./server');
const bd = require('./config/db');

// Connect to bd
bd.connect();

// Server
const server = app.listen(app.get('port'), () =>{
  console.log(`Listen https://localhost:${server.address().port}`)
});

