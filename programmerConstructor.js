var Programmer = function(name, title, age, lang) {
  this.name = name;
  this.title = title;
  this.age = age;
  this.lang = lang;
  this.print = function() {
    console.log(this.name, this.title, this.age, this.lang);
  };
}

var Whitley = new Programmer('Whitley', 'Bitcoin Dev', 22, 'Javascript');

Whitley.print();