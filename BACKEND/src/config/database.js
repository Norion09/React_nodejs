"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, { useNewUrlParser: true });
module.exports = mongoose;
