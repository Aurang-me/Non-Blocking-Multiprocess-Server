const express = require('express');
const fork = require('child_process').fork;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/isprime/:num',(req,res)=>{

  const childProcess = fork('./isPrime.js');
  childProcess.send({"number":parseInt(req.params.num)});
  childProcess.on('message', message=>res.send(message));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

