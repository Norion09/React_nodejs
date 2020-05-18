"use strict";
var mongoose = require("../config/database");
var schema = mongoose.Schema;
var TaskSchema = new schema({
    macaddrees: { type: String, require: true },
    type: { type: Number, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    when: { type: Date, require: true },
    done: { type: Boolean, default: false },
    created: { type: Date, default: Date.now() }
});
