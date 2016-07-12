var inquirer = require('inquirer');

var Programmer = function(options) {
  this.name = options.name;
  this.title = options.title;
  this.age = options.age;
  this.language = options.language;
  this.print = function() {
    console.log(this.name, this.title, this.age, this.language);
  };
}

inquirer.prompt([{
  name: "name",
  message: "What is your name?"
}, {
  name: "title",
  message: "What is your title?"
}, {
  name: "age",
  message: "What is your age?"
}, {
  name: "language",
  message: "What is your favourite programming language?"
}]).then(function(answers) {
  var newGuy = new Programmer({name: answers.name, title: answers.title, age: answers.age, language: answers.language});
  newGuy.print();
})