let mongoose = require ('mongoose');

let articleschema = mongoose.Schema({
  id:{
    type: String,
    require: true
  },
  tema:{
    type: String,
    require: true
  },
  titulo:{
    type: String,
    require: true
  },
  autor:{
    type: String,
    require: true
  },
  cuerpo:{
    type: String,
    require: true
  },
  bibliografia:{
    type: String,
    require: true
  }
});


let Article = module.exports = mongoose.model('article', articleschema);
