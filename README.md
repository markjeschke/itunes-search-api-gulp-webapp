# iTunes API Search Results Example

Add an iTunes search input to your webpage that will display a list of apps with their icons, descriptions, author, pricing, and screenshots.

## Front-end Setup

 This code scaffolding was generated via [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp). Before installing project dependencies, the following tools need to be installed on your machine:

- [Node.js](http://nodejs.org) and [npm](http://npmjs.com)
- [Bower](http://bower.io)
- [Gulp](http://gulpjs.com)


### Install Node.js + npm
Follow instructions for your machine from the [Node.js website](https://nodejs.org/download/). Installing Node will also install npm.

### Install Bower

    npm install -g bower

### Install Gulp

    npm install -g gulp

## Installation from GitHub repo

Using the command line, cd to the location where you'd like to install this project. Then, enter: 

	git clone git@github.com:markjeschke/itunes-search-api-gulp-webapp.git 

Press the 'return' key to begin the cloning process.

### Install project dependencies

You must run these from within this project directory. 

	npm install
	bower install


## Starting Front-end development in your browser

    gulp serve

This will start the local webserver while also watching JS and CSS files for any changes.  A browser should open up with live reload. Please note that this project utilizes [Sass](http://sass-lang.com/) to compile its CSS, [Bootstrap](https://getbootstrap.com/) to assist with responsive layout, and [Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/) for vector-based icons.

## Adding frameworks (via Bower)

If adding plugins, use bower install whenever possible.  For example:

    bower install --save plugin-name

Then reference the newly installed component in the appropriate file.

## Delivery to Client

Run this command to build static code to the /dist folder for client delivery.

    gulp build

 If you wish to build the project with the HTML, CSS, and JS unminified, please comment lines [#49](https://github.com/markjeschke/itunes-search-api-gulp-webapp/blob/master/gulpfile.babel.js#L49), [#50](https://github.com/markjeschke/itunes-search-api-gulp-webapp/blob/master/gulpfile.babel.js#L50), and [#53](https://github.com/markjeschke/itunes-search-api-gulp-webapp/blob/master/gulpfile.babel.js#L53) in the [gulpfile.babel.js](https://github.com/markjeschke/itunes-search-api-gulp-webapp/blob/master/gulpfile.babel.js) file.




