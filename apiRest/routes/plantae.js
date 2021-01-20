var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://gioele-bra:hGSdfpfQKAke3STS@lifebelowwater.dbkxm.mongodb.net/data?retryWrites=true&w=majority';

/* GET data.plantae */
router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("data").collection("plantae");
        collection.find({}).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

router.get('//name/:name', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    name = req.params.name;
    client.connect(err => {
        const collection = client.db("data").collection("plantae");
        collection.find({ 'Name': `${name}` }).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

module.exports = router;