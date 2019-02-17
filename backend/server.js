const fs = require('fs');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const cors = require('cors')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/treehacks2019',
    {useNewUrlParser: true});

const Photo = mongoose.model('photo', {
  person_id: mongoose.Schema.Types.ObjectId,
  data: Buffer,
  content_type: String,
  content_length: Number
});

const Person = mongoose.model('person', {
  name: String,
  email: String,
  phone_number: String,
  address: String,
  latitude: Number,
  longitude: Number,
  is_missing: Boolean,
  is_looking: Boolean,
  missing_name: String
});


// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
const upload = multer({ storage: storage });

const app = express();

// use cors
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/verify/:id', (req, res) => {
  console.log(req.url, 'was requested');
  /*
  verify(verifierAddress, req.query.id)
  .then(result => {
    res.send("Address " + req.query.id + " was verified.")
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("Could not verify the desired address.");
  });
  */
});

/*

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

*/


var singlePhotoUpload = upload.fields(
  [{ name: 'image', maxCount: 1 }])


app.post('/seed-image-recon', singlePhotoUpload, (req, res) => {
  // input image, output image
  // Call flask api
  /*
{ fieldname: 'image',
  originalname: '52586484_355610125290403_1610785333555757056_n.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './uploads/',
  filename: '0f6d940dca3dd3ae2d13170d15c24dbd1550363004139.jpeg',
  path: 'uploads/0f6d940dca3dd3ae2d13170d15c24dbd1550363004139.jpeg',
  size: 105779 }
  */
  //const returnFilePath = process.cwd() + "/uploads/0f6d940dca3dd3ae2d13170d15c24dbd1550363004139.jpeg"
  const imageInfo = req.files['image'][0];
  const imagePath = process.cwd() + "/" + imageInfo.path;

  image = fs.readFileSync(imagePath);

  const photo = new Photo({
    data: image.toString('base64'),
    content_type: imageInfo.mimetype,
    content_length: imageInfo.size,

  });
  photo.save()
    .then(doc => {
      console.log(doc);
      return res.json({'photo_id': doc._id, 'success': true});

    }, err => {
      return res.json({'success': false})
    });
});

app.post('/photo', singlePhotoUpload, (req, res) => {
  console.log(req.body);
  console.log(req.params);

  const imageInfo = req.files['image'][0];
  const imagePath = process.cwd() + "/" + imageInfo.path;

  image = fs.readFileSync(imagePath);

  const photo = new Photo({
    data: image.toString('base64'),
    content_type: imageInfo.mimetype,
    content_length: imageInfo.size,

  });
  photo.save()
    .then(doc => {
      console.log(doc);
      return res.json({'photo_id': doc._id, 'success': true});

    }, err => {
      return res.json({'success': false})
    });
})

app.get('/seed-image-features/:photo_id', singlePhotoUpload, (req, res) => {
  // input image, output features
  // Call flask api
  return res.json({
    'male': 1,
    'age': 1,
    'skin_tone': 0,
    'big_nose': 0.5,
    'pointy_nose': 0.25,
    'hairline': 0.69,
    'bald': -0.69,
    'wavy_hair': 0,
    'blond_hair': 0,
    'black_hair': 1,
    'gray_hair': 0,
    'beard': 0.2,
    'goatee': 0.1,
    'eyeglasses': 0
  });
})


app.get('/photo/:photo_id', (req, res) => {
  console.log(req.body);
  console.log(req.params);

  Photo.findOne({'_id': req.params.photo_id}).exec((err, photo) => {
    if (err) {
      console.log("error", err);
      return res.status(404).send({'success': false});
    }
    console.log(photo);
    let buff = new Buffer(photo.data, 'base64');

    //res.write(buff, 'binary');
    //return res.send(buff.toString('binary'), 'binary');
    //return res.send(buff);
    /**/
    crypto.pseudoRandomBytes(16, function (err, raw) {
        filename = '/tmp/' + raw.toString('hex') + Date.now() +
            '.' + mime.extension(photo.content_type);
        fs.writeFileSync(filename, buff);
        return res.sendFile(filename);
    });
    /**/
  });


  const returnFilePath = process.cwd() + "/uploads/0f6d940dca3dd3ae2d13170d15c24dbd1550363004139.jpeg"
  return res.sendFile(returnFilePath);
})

app.get('/seed-image-features', singlePhotoUpload, (req, res) => {
  // input image, output features
  // Call flask api
  return res.json({
    'male': 1,
  })
})



app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/photo', function (req, res) {
  res.send('Got a PUT request at /user')
})


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, "0.0.0.0", () => {
  console.log('Verifier app listening on port 3000!');
});

