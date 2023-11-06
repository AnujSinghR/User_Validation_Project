var http = require('http');
var fs = require('fs');
const insertUserData = require('./mysql_insertUserdata.js');
const validate_user = require('./login_fetchdata.js');
const port = 3000;

const server = http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  let url = req.url;
  if(url=="/sign"){
  res.setHeader('Content-Type','text/html');
  let data = fs.readFileSync('sign_up.html') ;
  
    res.statusCode = 200;
    res.end(data.toString());
    //res.setEncoding('utf8');
    if (req.method === 'POST') {
      let data = '';

      // Accumulate data as it comes in
      req.on('data', chunk => {
          data += chunk;
      });

      // When all data is received
      req.on('end', () => {
          // Parse the JSON data sent in the request body
          const requestData = JSON.parse(data);
          let uname = requestData.Username;
          let pass = requestData.Password;
          let gmail = requestData.email;
          // Here, you can access the properties of requestData object
          console.log('Username data:',uname);
          console.log('Password data:', pass);
          console.log('Email data:', gmail);
           
          insertUserData(gmail,uname,pass);
        
        });
      }
    }
    else{
      
      res.setHeader('Content-Type','text/html');
       let data = fs.readFileSync('login.html') ;
    
      res.statusCode = 200;
      res.end(data.toString());
      let pass_word;
      let user_name;

      if (req.method === 'POST') {
        let data = '';
        
        req.on('data', chunk => {
            data += chunk;
        });
    
        req.on('end', () => {
            const requestData = JSON.parse(data);
            user_name = requestData.Username;
            pass_word = requestData.Password;
            
            validate_user(user_name,pass_word);
        });
    }
    
    }
});
server.listen(port,()=>{
    console.log(`server is listen on port ${port}`);
});

  
  //-----------------------------------------------------------