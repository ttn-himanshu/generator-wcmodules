'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
    prompting: function() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fantabulous ' + chalk.red('generator-wcmodules') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }, {
            type: 'input',
            name: 'ngname',
            message: 'Your angular app name',
            default: 'wrcApp'
        }];

        return this.prompt(prompts).then(function(props) {
            this.props = props;
        }.bind(this));
    },
    config: function() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name
            }
        );
        this.fs.copyTpl(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json'), {
                name: this.props.name
            }
        );
        this.fs.copyTpl(
            this.templatePath('_Gruntfile.js'),
            this.destinationPath('Gruntfile.js'), {
                name: this.props.name,
                ngname: this.props.ngname
            }
        );
        this.fs.copy(
            this.templatePath('_README.md'),
            this.destinationPath('README.md')
        );
        this.fs.copy(
            this.templatePath('_bowerrc'),
            this.destinationPath('.bowerrc')
        );
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
            this.templatePath('_karma.conf.js'),
            this.destinationPath('karma.conf.js'), {
                name: this.props.name
            }
        );
    },

    writing: function() {
        this.fs.copyTpl(
            this.templatePath('_public/_scripts/_app.js'),
            this.destinationPath('src/scripts/app.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_public/_scripts/_directives/_testDirective.js'),
            this.destinationPath('src/scripts/directives/testDirective.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_public/_scripts/_services/_testService.js'),
            this.destinationPath('src/scripts/services/testService.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_public/_scripts/_factory/_testFactory.js'),
            this.destinationPath('src/scripts/factory/testFactory.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_test/_directives/_testDirective.js'),
            this.destinationPath('src/scripts/directives/testDirective.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_test/_services/_testService.js'),
            this.destinationPath('src/scripts/services/testService.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copyTpl(
            this.templatePath('_test/_factory/_testFactory.js'),
            this.destinationPath('src/scripts/factory/testFactory.js'), {
                ngname: this.props.ngname
            }
        );

        this.fs.copy(
            this.templatePath('_public/_views/_directive/_testDirectiveTemplate.html'),
            this.destinationPath('src/views/directive/testDirectiveTemplate.html')
        );

        this.fs.copyTpl(
            this.templatePath('_public/_index.html'),
            this.destinationPath('src/index.html'), {
                name: this.props.name,
                ngname: this.props.ngname
            }
        );
    },

    install: function() {
        this.installDependencies();
    }
});
