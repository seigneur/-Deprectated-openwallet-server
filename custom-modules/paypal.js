exports.storeAuth = function(req,res,callback){
//store the request auth in a database with that user id
try{
    var auth  = req.body.auth;
    var userId = req.body.userid;
    console.log('req:',req);
    console.log('AUTH:'+auth);
    var db = req.db;    
    var collection = db.get('usercollection');
    collection.insert({
        "username" : userId,
        "auth" : auth
    }, function (err, doc) {
        if (err) {            
            res.send("There was a problem adding the information to the database.");
        }
        else {
            callback(null,true);
        }
    });
    
}
catch(e){
console.log('error in paypal',e);
callback(e,null);
}
}
