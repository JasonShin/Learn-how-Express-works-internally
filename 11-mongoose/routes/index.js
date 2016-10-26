import express from 'express';
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    title: {type: String, required: true},
    content: String,
    author: String
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

router.get('/', (req, res, next) => {
    res.render('index');

});


router.get('/get-data', (req, res, next) => {
    UserData.find()
        .then((doc) => {
            res.render('index', {items: doc});
        });
});

router.post('/insert-data', (req, res, next) => {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    var data = new UserData(item);
    data.save();

    res.redirect('/');
});

router.post('/update-data', (req, rest, next) => {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    var id = req.body.id;

    UserData.findById(id, (err, doc) => {
        if(err) {
            console.log(err);
        } else {
            doc.title = item.title;
            doc.content = item.content;
            doc.author = item.author;
            doc.save();
        }
    });
});

router.post('/delete-data', (req, rest, next) => {
    var id = req.body.id;
    UserData.findByIdAndRemove(id).exec();
});

module.exports = router;
