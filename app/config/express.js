//config/express.js
var express = require('express');
var home = require('../routes/home');

module.exports = function() {
    var app = express();


    //variavél de ambiente
    app.set('port', 3000);
    

    //middleware
    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
//  app.use(app.router); 
    home(app);

return app;
};
