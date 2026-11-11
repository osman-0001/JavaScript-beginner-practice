     
     
     // 1. Age calculator
         const currentYear = 2026;
         let birthYear = prompt("Enter your birth year:");

         const age = currentYear - birthYear;
         console.log(`You are ${age} years old.`);
        

        // 2. BMI Calculator
         let weight = prompt("Enter your weight in kg:");
         let height = prompt("Enter your height in meters:");

         const bmi = weight / (height * height);
         console.log("Your bmi is " + bmi);
        

        // 3. Celsius → Fahrenheit
         let celsius = prompt("Enter temperature in Celsius:");

         const fahrenheit = (celsius * 9/5) + 32;
         console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

        // 4. calculator
        let num1 = parseFloat(prompt("Enter first number:"));
        let num2 = parseFloat(prompt("Enter second number:"));

        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;

        console.log(`Addition: ${addition}`);
        console.log(`Subtraction: ${subtraction}`);
        console.log(`Multiplication: ${multiplication}`);
        console.log(`Division: ${division}`);


        
        // 5. Even or Odd
        let number = parseInt(prompt("Enter a number:"));
        if (number % 2 === 0) {
            console.log(`${number} is even`);
        } else {
            console.log(`${number} is odd`);
        };

        // 6. Grade Calculator
        const marks = parseInt(prompt("Enter your marks: "));

        if (marks >= 90){
            console.log("Grade A");
        }else if (marks >= 80){
            console.log("Grade B");
        }else if (marks >= 70){
            console.log("Grade C");
        }else if (marks >= 60){
            console.log("Grade D");
        }else if (marks >= 55){
            console.log("Grade F");
        }


        // 7. times Table
       const tableNumber = parseInt(prompt("Enter your Number:"));
        
        for(let i = 1; i <= 10; i++ ){
            console.log(`${tableNumber} × ${i} = ${tableNumber * i}`);
        }
     

      //     Function Challenge #1

      //  Create a function called subtract that:
      //  *takes two numbers
      //  *returns the result of subtracting the second number from the first
        
        const subtract = (number1 ,number2) => number1 -number2;
        const result = subtract(20 , 10);
        console.log(result);


      //     Function Challenge #2

      //  Create a function called isEven that:
      //  *takes one number
      //  *returns true when the number is even
      //  *returns false when the number is odd
      
        const isEven = (number) => number % 2 === 0;
        console.log(isEven(7));
        console.log(isEven(8));


      //     Function Challenge #3

      //  Create a function called getFullName that takes two parameters:
      //  *firstName
      //  *lastName
      //  It should return the full name.

      function getFullName(fisrtName, lastName){
        return fisrtName + " " + lastName;
      }
      console.log(getFullName("Osman","Sadat"));
     

      //     Function Challenge #4

      //  Create a function called calculateAge that takes birthYear as a parameter and returns the person's age.  
 
      const currentYear2 = 2026;
      const calculateAge = (birtDate) => currentYear2 - birtDate;
      console.log(calculateAge(2003));


      //  Function Challenge #5 — isAdult

      //  Create a function called isAdult that:
      //  *takes age as a parameter
      //  *returns true if the age is 18 or older
      //  *returns false otherwise

        const isAdult = (age) => age >= 18;
        console.log(isAdult(10));


      //   Function Challenge #6 — getMax

      //  create a function called getMax that takes two numbers and returns the larger number.

        function getMax(number1,number2){
            if(number1 > number2){
                return number1;
            }
            else if(number1 < number2){
                return number2;
            }
            else{
                return "both numbers are equal";
            }
        }
        console.log(getMax(20,10));

      //   Challenge #7 — calculateArea

      //  Create a function called calculateArea that takes:
      //  *length
      //  *width
      //  and returns the area of a rectangle.
      
      const calculateArea = (length,width) => length * width;
      console.log(calculateArea(80,60));

      //   Challenge #8 — calculateDiscount

      //  Create a function called calculateDiscount that takes:
      //  *price
      //  *discountPercent
      //  and returns the final price after the discount.
        
      function calculateDiscount(price,discountPercent){
        const discount_amount = price * discountPercent / 100;
        return price - discount_amount;
      };

      console.log(calculateDiscount(200,15));
 

        // Challenge #9 — getMax

      //  Let's practice something slightly different.
      //  Create an arrow function called getMax that takes two numbers and returns the larger one.
        
      const getMax = (number1,number2) => number1 > number2 ? number1 : number2;
        console.log(getMax(9,10));


      //  🎯 Day 3 — Challenge #10

      //  Write a function called countVowels that takes a word and returns the number of vowels (a, e, i, o, u) in it.

    function countVowels(word){
        let count = 0;

        for (let i=0; i<word.length; i++){
            if("aeiou".includes(word[i])){
                 count++;
            }
           
        }
        return count;

    }  
    
    console.log(countVowels("Book"));
  
  // Write a switch statement that checks a variable called grade.
  // - A → Excellent
  // - B → Very Good
  // - C → Good
  // - D → Pass
  // - F → Fail
  // - Any other value → Invalid grade

let grade = 'D';

switch (grade){
    case 'A':
        console.log("Excellent");
        break;

    case 'B':
        console.log("Very Good");
        break;

    case 'C':
        console.log("Good");
        break;

    case 'D':
        console.log("Pass");
        break;

    case 'F':
        console.log("Fail");
        break;        

    default:
        console.log("lnvalid grade")
}

