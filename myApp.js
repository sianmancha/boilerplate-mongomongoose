require('dotenv').config();
const { Schema } = require('mongoose');
const mongoose = require('mongoose')

// 1. Install and Set Up Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// 2. Create a Model
let personSchema = new Schema({
  name : String,
  age : Number,
  favoriteFoods : [String]
});
let Person = mongoose.model("Person", personSchema);

// 3. Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  let ariMancha = new Person({name : "Ari Mancha", age : 25, favoriteFoods : ["Peaches", "Watermelons", "Mangoes"]});
  
  ariMancha.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};
 
// 4. Create Many Records with model.create()
arrayOfPeople = [
  {
    name : "Blossom Mancha",
    age : 1,
    favoriteFoods : ["Chicken", "Kitty Kibble", "Anything Ari is eating"]
  },
  {
    name : "Honeybee Mancha",
    age : 87,
    favoriteFoods : ["Raw Chicken", "Soft Kitty Food", "Bones"]
  },
  {
    name : "Doja Mancha",
    age : 2,
    favoriteFoods : ["Carpet", "Paper", "Important cables"]
  }
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
