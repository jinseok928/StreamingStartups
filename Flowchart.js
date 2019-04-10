var username =client_id;
var amount =1000;
var message ='Hello, world';
var sender=username;
var today=Date().replace(/\s/g, '');
var filename=username+today.substring(0,20);

function save(){
    //I have not understood perfectly yet.
    fs.writeFile(`data/${filename}`,message,'utf8', function(err){});
}

 function submit(info1,info2,info3,info4){
if(logedin){
    save(info1,info2,infor3,info4)
    //this place is send message
}else[
    alert("Please, log in to send a meesage to your streamer.");
] 
}




if(message.length<=1){
    alert("Please, leave a message");
    }else{
    submit(username,amount,message,sender);
    save(username,amount,message.sender);
}
