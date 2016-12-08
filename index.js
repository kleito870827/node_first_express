const express = require('express');
const app = express();
const port = 3000;

app.use((request, response, next)=>{
  console.log(request.headers);
  next();
});

app.use((request, response, next)=>{
  request.chance = Math.random();
  next();
});

app.get('/', (request, response)=>{
  // response.send("Hello form Express!");
  // response.json({
  //   chance: request.chance,
  //   header: request.headers
  // });
  // throw new Error('oooops');
});

app.use((err, request, response, next)=>{
  console.log(err);
  response.status(500).send('Something is messed up!!');
});


app.listen(port, (err)=>{
  if(err){
    return console.log("Something bad happend...", err);
  }
  console.log(`Server is running on port: ${port}`);
})
