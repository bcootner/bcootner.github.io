'use strict';

var nedb = require('nedb');
var express = require('express');
var multer = require('multer');
var uploads = multer({dest: 'uploads/'});
var uuid = require('node-uuid');
var path = require('path');
var fs = require('fs');
var PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');

var db = new nedb({ filename: './datafile', autoload: true });
db.loadDatabase();
var app = express();
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'static')));
