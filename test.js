

function Person()
{
    this.name = "";
    this.age = 0;

}

Person.prototype.GetInfo = function()
{
    return this.name + "'s age is " + this.age + " years old";
    }

var person = new Person();
person.age = 10;
person.name= "John";

alert(person.GetInfo());
