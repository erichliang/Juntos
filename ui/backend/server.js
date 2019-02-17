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
    cb(null, __dirname+'/uploads/')
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


/* Helpful tip

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

*/


var singlePhotoUpload = upload.fields(
  [{ name: 'image', maxCount: 1 },
   { name: 'person_id', maxCount: 1}])


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
  //const returnFilePath = __dirname + "/uploads/0f6d940dca3dd3ae2d13170d15c24dbd1550363004139.jpeg"
  const imageInfo = req.files['image'][0];
  const imagePath = imageInfo.path;

  image = fs.readFileSync(imagePath);

  const photo = new Photo({
    data: image,
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
  const imagePath = imageInfo.path;

  const image = fs.readFileSync(imagePath);

  const photo = new Photo({
    data: image,
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

app.post('/generate-image', (req, res) => {
  // call the flask api with req.body
  return res.json({'success': true, 'photo_id': '5c69095b28b673337eecd7a1'})
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

    res.contentType(photo.content_type);
    return res.send(photo.data);
    /*
    crypto.pseudoRandomBytes(16, function (err, raw) {
        filename = '/tmp/' + raw.toString('hex') + Date.now() +
            '.' + mime.extension(photo.content_type);
        fs.writeFileSync(filename, buff);
        return res.sendFile(filename);
    });
    /**/
  });
})

app.get('/seed-image-features', singlePhotoUpload, (req, res) => {
  // input image, output features
  // Call flask api
  return res.json({
    'male': 1,
  })
})


app.get('/nearest-images/:photo_id', (req, res) => {
  return res.json([
    {
      _id: 1234,
      name: 'Alex Cui',
      email: 'alex@email.com',
      address: '1000 Pennsylvania Ave',
      is_missing: true,
      is_looking: false,
      photo_id: 12345
    },
    {
      _id: 1235,
      name: 'Erich Liang',
      email: 'erich@email.com',
      address: '100 Pennsylvania Ave',
      is_missing: false,
      is_looking: true,
      photo_id: 123456
    }
  ])
});


app.post('/person', (req, res) => {
  console.log(req.body);
  console.log(req.params);

  const person = new Person(req.body);
  person.save()
    .then(doc => {
      console.log(doc);
      return res.json({'person_id': doc._id, 'success': true});
    }, err => {
      return res.json({'success': false})
    });
})

app.get('/person/:person_id', (req, res) => {
  console.log(req.body);
  console.log(req.params);

  Person.findOne({'_id': req.params.person_id}).exec((err, person) => {
    if (err) {
      console.log("error", err);
      return res.status(404).send({'success': false});
    }
    console.log(person);
    // bad form
    person.success = true;
    return res.json(person);
  });
})

app.post('/text', (req, res) => {
  // call twilio with number in req.body.phone_number
  return res.json({'success': true});
})


app.put('/person/:person_id', (req, res) => {
  if (req.params.person_id === undefined) {
    return res.status(400);
  }
  Person.findOne({'_id': req.params.person_id}).exec((err, person) => {
    if (err) {
      console.log("error", err);
      return res.status(404).send({'success': false});
    }
    console.log(person);
    // bad form
    const keys = Object.keys(req.body);
    for (const key of keys) {
      person[key] = req.body[key];
    }

    person.save()
    .then(doc => {
      console.log(doc);
      return res.json({'person_id': doc._id, 'success': true});
    }, err => {
      return res.json({'success': false})
    });
  });
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, "0.0.0.0", () => {
  console.log('App listening on port 3000!');
});

