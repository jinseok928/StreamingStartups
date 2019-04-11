var username =client_id; //client id is imported from Twitch.
var amount =0;
var text ='Hello, world';
var sender=username;
var receiver ='nanajam777';
var today=Date().replace(/\s/g, '');
var filename=username+today.substring(0,20);

function autheticTest(message){
    var message = {
        "username":username,
        "sender":sender,
        "receiver":receiver,
        "amount":amount,
        "text":text
    };
    if(logedin){
    //1. login test
    //2. text.length test
        if(text.length>=1){
            submit(message);
            save(message);
            }else{
            alert("Please, write down what you want to say to your streamer.");
            }
          
    
    }else{
        alert("Please, log in to send a meesage to your streamer.");
    }
}

function save(message){
    fs.writeFile(`data/${filename}`,text,'utf8', function(err){}); //I have not understood perfectly yet.
}

 function submit(message){
}




