var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));  //no idea

mongoose.connect('mongodb://localhost/mean_post_db');
app.use(cors({
    origin: 'http://localhost:4200'
  }));

var db = mongoose.connection;

db.on('error', function () {
    console.log('connection Failed');
})

db.on('open', function () {
    console.log('Connection established');
})

var regSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },


});

var createPostSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
           },
    
    post_title: {
        type: String,
        required: true,
       
    },
    post_des: {
        type: String,
        required: true,
        
    },
    comments:{
        type:Array,
   },

    likes:{
        type:Number,
        
    }
});

var commentsSchema = mongoose.Schema({
    pid: {
        type: String,
        
           },
    
    comments: {
        type: String,
        
       
    },
    uid: {
        type: String,
       
        
    },
    
});

var User = mongoose.model('regCollection', regSchema);
var PostC = mongoose.model('postCollection',createPostSchema);
var comm = mongoose.model('commCollection',commentsSchema);

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.post('/register', function (req, res) {

    var push = new User(req.body);
    console.log(push);
    push.save();

    // if (req.body.username && req.body.password) {
    //     res.send({
    //         isLoggedin: true
    //     });
    // }
    // else {
    //     res.send({
    //         isLoggedin: false
    //     });
    // }

});
app.post('/post_create', function (req, res) {

    var newPost = new PostC(req.body);
    (newPost).save().then(function (user,err) {
        if (!err) {
          res.send({
            flg: true
          });
        }
        else{
          res.send(err);
        }
      })
    });
    
//     console.log(newPost);
//     newPost.save();
// });

app.post('/login',function(req,res){
    
    User.findOne({username:req.body.username},function(error,docs){
        if(!docs)
        {
            res.send({success:false,username:null})
           
        }else if(docs.password==req.body.password){

            var token=jwt.sign({docs:req.body.username},'prince',(err,token)=>{
                // console.log(token);
                console.log(docs);
                return res.json({token:token,success:true,user:docs});
                
            });
        

        }else{
            res.send({success:false,user:null});
        }
    })

});
   
app.use(function(req,res,next){
    var token = req.body.authtoken || req.query.authtoken ||req.headers['authtoken']
    jwt.verify(token,'prince',function(err,decoded){
        if(err){
            res.send({
                err : true,
                msg : 'Invalid Request!!'
            });

        }else{
            req.decoded = decoded;
            next();

        }

    });
});
        

app.get('/view_Posts', function (req, res) {
     console.log(req.decoded);
    
        PostC.find({},function(err,docs){
            if(err){
                console.log('Bad request');
            }else{
                res.send(docs);

            }
        })
      
    });

    app.post('/view_MyPosts', function (req, res) {
        
       console.log(req.body.uid);
           PostC.find({uid:req.body.uid},function(err,docs){
               if(err){
                   console.log('Bad request');
               }else{
                   res.send(docs);
                   console.log(docs);
   
               }
           })
         
       });
       
       
        app.post('/view_Comments', function (req, res) {
            console.log(req.body);
            var newComm = new comm(req.body);
            
            (newComm).save().then(function (user,err) {
                if (!err) {
                  res.send({
                    flg: true
                  });
                }
                else{
                  res.send(err);
                }
              })
            });
   
  

app.listen(3000, function () {
    console.log('Server running on port:3000');
})
