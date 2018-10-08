const purify = require('purify-css');

var content = ['./../static/js/custom.min.js',
'./../static/js/contact.min.js',
    './../static/js/jquery-3.3.1.min.js',
    './../static/styles/bootstrap4/bootstrap.min.js',
    './../static/plugins/parallax-js-master/parallax.min.js',
    './../static/plugins/easing/easing.js',
    './../static/styles/bootstrap4/popper.js',
    './../static/index.html'];
var css = ['./../static/plugins/font-awesome-4.7.0/css/font-awesome.min.css',
    './../static/styles/bootstrap4/bootstrap.min.css',
    './../static/styles/main_styles.css',
    './../static/styles/responsive.css'];

var options = {
    // Will write purified CSS to this file.
    output: './../static/dist/main.css',
    minify: true,
    whitelist: ['*d-flex*']
};

// var content = ['./../static/js/contact.min.js',
// './../static/js/contact.min.js',
//     './../static/js/jquery-3.3.1.min.js',
//     './../static/styles/bootstrap4/bootstrap.min.js',
//     './../static/plugins/parallax-js-master/parallax.min.js',
//     './../static/plugins/easing/easing.js',
//     './../static/styles/bootstrap4/popper.js',
//     './../static/contact.html'];
// var css = ['./../static/plugins/font-awesome-4.7.0/css/font-awesome.min.css',
//     './../static/styles/bootstrap4/bootstrap.min.css',
//     './../static/styles/contact.css',
//     './../static/styles/contact_responsive.css'];

// var options = {
//     // Will write purified CSS to this file.
//     output: './../static/dist/contact.css',
//     minify: true,
//     whitelist: ['*d-flex*']
// };

purify(content, css, options);