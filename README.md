# iTunes API Search Results Example

Add an iTunes search input to your webpage that will display a list of apps with their icons, descriptions, author, pricing, and screenshots.

## Front-end Setup

 This code example was generated via [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp). Before installing project dependencies, the following tools need to be installed:

- [Node.js](http://nodejs.org) and [npm](http://npmjs.com)
- [Bower](http://bower.io)
- [Gulp](http://gulpjs.com)


### Install Node.js + npm
Follow instructions for your machine from the [Node.js website](https://nodejs.org/download/). Installing Node will also install npm.

### Install Bower

    npm install -g bower

### Install Gulp

    npm install -g gulp

### Install project dependencies
Must run these from inside each campaign directory. 

	npm install
	bower install


## Starting Front-end Dev in your browser

    gulp serve

This will start the local webserver while also watching JS and CSS files for any changes.  A browser should open up with live reload.

## Adding frameworks (via Bower)

If adding plugins, use bower install whenever possible.  For example:

    bower install --save plugin-name

Then reference the newly installed component in the appropriate file.

## Delivery to Client

Run this command to build static code to the /dist folder for client delivery.

    gulp build

 If you wish to build the project with the HTML, CSS, and JS unminified, please comment lines #49, #50, and #53 in the gulpfile.babel.js file.

 <code>
 	gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify())) // <-- comment this line, if you don't wish to minify the code.
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'}))) // <-- comment this line, if you don't wish to minify the code.
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true}))) // <-- comment this line, if you don't wish to minify the code.
    .pipe(gulp.dest('dist'));
});
</code>




