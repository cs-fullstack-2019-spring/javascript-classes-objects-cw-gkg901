//Create a Person class with three attributes: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.
//
// BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.


class Person
{
    constructor(name,weight,height)
    {
        this.name = name;
        this.weight = weight;
        this.quantity = height;
    }

    bmi(lbs,inches){

        console.log(lbs / (inches * inches) * 703)
    }

}


var fighter = new Person("Ryu", 225, 60);

fighter.bmi(225,60);


