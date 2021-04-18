"use strict";

var _model = require("./model.js");

var _view = require("./view.js");

var _controller = require("./controller.js");

var model = new _model.Model();
var view = new _view.View();
var controller = new _controller.Controller(model, view);