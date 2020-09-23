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
const homeRouter = require('./api/home/routes');
const userRouter = require('./api/user/routes');
const inmueblesRouter = require('./api/inmuebles/routes');

// Initialization
const app = express();
app.use(session({ secret: config.secret }))
require('./config/passport');


// Settings
app.set('port', config.port);
cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.cloud_api_key,
  api_secret: config.cloud_api_secret
});
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(override('_method'));
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/upload'),
    filename: (req, file, cb, filename) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
})
app.use(multer({ storage }).single('photo'));


// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  res.locals.dev = config.dev;
  next();
})

// Routes
app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/', inmueblesRouter);


// Static files


module.exports = app;
