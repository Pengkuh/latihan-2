require('dotenv').config(); // Load environment variables from .env file


const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const secretKey = process.env.SECRET_KEY;

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.get('/biodata', function (req, res) {
  const nama = req.query.nama;
  const tempatLahir = req.query['tempat-lahir'];
  const tanggalLahir = req.query['tanggal-lahir'];
  const alamat = req.query.alamat;

  const biodata = {
    'Nama': nama,
    'Tempat Lahir': tempatLahir,
    'Tanggal Lahir': tanggalLahir,
    'Alamat': alamat,
    SecretKey: secretKey

  };

  res.send(biodata);
});

app.post('/biodata', function (req, res) {
  const nama = req.body.nama;
  const tempatLahir = req.body['tempat-lahir'];
  const tanggalLahir = req.body['tanggal-lahir'];
  const alamat = req.body.alamat;

  const biodata = {
    'Nama': nama,
    'Tempat Lahir': tempatLahir,
    'Tanggal Lahir': tanggalLahir,
    'Alamat': alamat,
    SecretKey: secretKey

  };

  res.send(biodata);
});

app.listen(port);
console.log("server started at http://localhost : " + port);

// Get Link
// http://localhost:3000/biodata?nama=Bruno+Fernandez&tempat-lahir=Lisbon&tanggal-lahir=1994-09-08&alamat=Manchester+UK