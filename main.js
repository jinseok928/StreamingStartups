var username ='jin';
var amount =1000;
var message ='Hello, world';
var sender=username;
var today=Date().replace(/\s/g, '');
var streamer='Nanajam777';

function submit(){
}
function save(){
}
function readFile(link){
  fs.readFile(link, 'utf8', function(err, description){
  });
  response.writeHead(200);
  response.end(template);
}

//from this line, everything came from the example.
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs=require('querystring');
 
function templateHTML(streamer){
    return `
    <!DOCTYPE html>
    <html>
        <head>    
            <title>${streamer}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" /> 
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:300,800" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="header">
                <h3 style="color:white;">Free Speech Message</h3>
                <h1>to <b>${streamer}</b></h1>
            </div>
            <div>
                <form action="localhost:3000/process_message">
        
                    <p class="inputLabel">Username</p>
                    <input type="text" name="username" id="username" value="${username}">
                    <p class="inputLabel">Message</p>
            
                <textarea type="text" name="message" class="messageInput" placeholder='What do you want to say to your streamer?'></textarea>
                <button type="submit" id='submitButton'>
                Submit
                </button>
            </form>
            
        </div>   
    </body>
</html>
    `;
  }


  var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
      

          var template = templateHTML(streamer);
          response.writeHead(200);
          response.end(template);
      } 
    } else if(pathname === '/process_message'){
    var body ='';
    request.on('data',function(data){
      body = body +data;
    });
    request.on('end',function(){
      var post =qs.parse(body);
      var username=post.username;
      var message =post.message;
      var filename=username+today.substring(0,20);
      fs.writeFile(`data/${username}`,username+"/"+message+"/"+sender,'utf8', function(err){
        response.writeHead(302,{location:`/`});
        response.end('success');})
      console.log(post.title);
    });
    


    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);



if(message.length<=1){
    alert("Please, leave a message");
    }else{
    submit(username,amount,message,sender);
    save(username,amount,message.sender);
}// when they press the submit button, this action is required
