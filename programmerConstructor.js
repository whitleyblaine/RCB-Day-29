var Programmer = function(options) {
  this.name = options.name;
  this.title = options.title;
  this.age = options.age;
  this.lang = options.lang;
  this.print = function() {
    console.log(this.name, this.title, this.age, this.lang);
  };
}

var Whitley = new Programmer({name: 'Whitley', title: 'Bitcoin Dev', age: 22, lang: 'Javascript'});

Whitley.print();