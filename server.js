const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const override = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const cloudinary = require('cloudinary');
const cors = require("cors");
const { config } = require('./config');


// Controllers


// Initialization
const app = express();


// Settings
app.set('port', config.port);
cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.cloud_api_key,
  api_secret: config.cloud_api_secret
});


// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/upload'),
  filename: (req, file, cb, filename) => {
      cb(null, uuidv4() + path.extname(file.originalname))
  }
})
app.use(multer({ storage }).single('photo'));


// Global Variables


// Routes


// Static files


module.exports = app;
