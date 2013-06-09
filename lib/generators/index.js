'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function () {
    yeoman.generators.Base.apply(this, arguments);
    yeoman.generators.NamedBase.apply(this, arguments);
    this.sourceRoot(path.join(__dirname, '..', 'templates'));
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../..', 'package.json')));
};

util.inherits(Generator, yeoman.generators.Base);
