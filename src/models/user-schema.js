'use strict';

const mongoose = require('mongoose') 

const schema = mongoose.Schema({
    username: {type: 'string', unique: true, require: true},
    password: {type: 'string', require: true},
})