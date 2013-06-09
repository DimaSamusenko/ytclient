'use strict';

var util = require('util');
var generatorBase = require('../index');

var Generator = module.exports = function (args, options) {
    generatorBase.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });
};

util.inherits(Generator, generatorBase);

Generator.prototype.askFor = function () {
    var cb = this.async();

    var prompts = [{
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: 'Y/n'
    }];

    this.prompt(prompts, function (err, props) {
        if (err) {
            return this.emit('error', err);
        }

        this.someOption = (/y/i).test(props.someOption);

        cb();
    }.bind(this));
};

Generator.prototype.templates = function () {
    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
};
