var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/taskModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb+srv://mrmclaughli:@cluster0-abogf.mongodb.net/Test?retryWrites=true&w=majority', {useNewUrlParser: true}); 
mongoose.connect("mongodb+srv://mmAdmin:pNgg1Wx1Qp60G6LL@cluster0-abogf.mongodb.net/Test?retryWrites=true&w=majority",{ useNewUrlParser: true });    

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(function(req, res) {
  //  res.status(404).send({url: req.originalUrl + ' not found'})
  //});

var routes = require('./api/routes/taskRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);