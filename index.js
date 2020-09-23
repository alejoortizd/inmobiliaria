const app = require('./server');


// Server
const server = app.listen(app.get('port'), () =>{
  console.log(`Listen https://localhost:${server.address().port}`)
});

