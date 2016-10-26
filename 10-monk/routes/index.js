import express from 'express';
var router = express.Router();
var db = require('monk')('localhost:27017/test');
var userData = db.get('user-data');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index');
});


router.get('/get-data', (req, res, next) => {
    var data = userData.find({}, (err, docs) => {
        console.log(docs);
        res.render('index', {items: docs});
    });
});

router.post('/insert-data', (req, res, next) => {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };

    var insert = userData.insert(item);

    res.redirect('/');

});

router.post('/update-data', (req, rest, next) => {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    };
    var id = req.body.id;

    //userData.update({"_id": db.id(id)}, item);
    userData.updateById(id, item);
});

router.post('/delete-data', (req, rest, next) => {
    var id = req.body.id;

    userData.removeById(id);
});

module.exports = router;
