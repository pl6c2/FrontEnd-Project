var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');
const Credential = require('../models/credentials');
var app = express();
var cors = require('cors');

var postsRouter= require('./posts');
app.use('/api/posts', postsRouter);
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
});

// mongoose.connect('mongodb://localhost:27017/host', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://gouthamase:<password>@cluster0-5zsye.mongodb.net/model?retryWrites=true', { useNewUrlParser: true });
mongoose.connect("mongodb+srv://gouthamase:gouthamase@cluster0-5zsye.mongodb.net/model?retryWrites=true",
    { useNewUrlParser: true })
    .then(()=>{
        console.log('connected succesfully');
    })
    .catch(()=>{
        console.log('error in connection');
    });


var conn=mongoose.connection;
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');

let gfs;

conn.once('open', ()=> {
   gfs=Grid(conn.db, mongoose.mongo);
   gfs.collection('models');
})



// let gfs = Grid(conn.dbName);
if(conn) {
    console.log("db connected")
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json);




const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/host',
    file: (req, file) => {
        if (file.mimetype === 'image/jpeg') {
            return {
                bucketName: 'models'
            };
        } else {
            return null;
        }
    }
});
// const upload = multer({ storage });
const upload = multer({ storage: storage });

const supload= upload.single('multiple');
router.post('/fileupload', supload, (req,res) =>{
    console.log(req.file);
    if(res) {
        res.json({file: req.file});
    } else {
        res.json({err : 'error'});
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/first', function(req, res, next) {
  res.send("First Get Request");
});

router.post('/saveDetails',function(req,res,next) {
  // Credential.create(req.body).then(function(cred){
  //   console.log(cred);
  //
  // })
    console.log('in savedetails',req.body);
    let newUser = new Credential(req.body);
    newUser.save({}, (err, result)=> {
      if(result) {
          res.send('success');
      }
      else {
          console.error(err);
          res.send('user not saved');
      }
    })
});

// router.post('/authenticate',function(req,res,next) {
//   Credential.findOne({ userName : req.userName}, function(err, user) {
//     if(err) throw err;
//     user.comparePassword('req.password',function(err, isMatch) {
//       if(err) throw err;
//       console.log(req.password, isMatch);
//       res.send('Authenticated');
//     })
//   })
// });

router.post('/authenticate' ,function(req,res,next) {
  console.log(req.body);
    Credential.find({'userName': req.body.userName}, function (err, user) {

        // console.log(typeof user);
        // console.log(user);

       //  console.log("User data"+user[0].password);
        console.log(user);
        if (user.length <= 0){
            res.json('no user available register to login');
        }else{
            if(user[0]) {
                if (user[0].password == req.body.password) {
                    res.json("Success");
                }else {
                    res.json("incorrect password")
                }
            }
        }
    });
});

module.exports = router;
