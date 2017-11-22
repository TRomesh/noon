const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done)=>{

  mongoose.connect('mongodb://localhost/noon');
  mongoose.connection
        .once('open',()=>{console.log('Good to go!'); done();})
        .on('error',(error)=>{
          console.warn('Warning',error);
        });

});