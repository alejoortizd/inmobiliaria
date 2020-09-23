const {Schema, model} = require('mongoose');

const inmueblesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  adress: {
    type: String,
    trim: true,
    required: true
  },
  state: {
    type: String,
    validate: [
      function(state){
        return state.length <= 2;
      },
      'El state debe de ser menor a 2 caracteres'
    ],
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  zip: {
    type: String,
    validate: [
      function(zip){
        return zip.length <= 5;
      },
      'El state debe de ser menor a 5 caracteres'
    ],
    required: true
  },
  country: {
    type: String,
    validate: [
      function(country){
        return country.length <= 2;
      },
      'El state debe de ser de 2 caracteres'
    ],
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
});

const Inmuebles = model('Inmuebles', inmueblesSchema);

module.exports = Inmuebles;
