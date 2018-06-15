module.exports = function(app){

    // var application = require('./routes/application');
    // var users = require('./routes/users');
    // var trips = require('./routes/trips');
    // var pricing = require('./routes/pricing');

    var application = require("./routes/app");

    // app.use('/', application);
    // app.use('/users', users);
    // app.use('/trips', trips);
    // app.use('/pricing', pricing);

    app.use("/", application);








//other routes..
}