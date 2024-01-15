const http= require('http');

const server= http.createServer((req, res)=>{
  // const googleFile= fs.readFileSync('./google.html', {encoding: 'utf-8'});
  // res.writeHead('200', {
  //   'Content-type': 'text/plain'
  // })
  
  // res.writeHead('200', {
  //   'Content-Type': 'html'
  // })
  res.writeHead('200', {
    'Content-Type': 'text/json'
  })
  res.end(JSON.stringify({
    name: 'sarvesh',
    age: 21
  }));
})


server.listen(5050, () => {
  console.log("listening on port 5050");
});
