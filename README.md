# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results 

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions
### (please edit this file and write your answer below each question. In addition, you may also review these questions with your mentor)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
> forEach just loops through an array and exicutes a callback once for each element in the array... it's return value is undefined. Array.prototype.map() creates a new array populated with the results of calling a provided function on every element in the calling array. If you want to do something as a result of a forEach than you would need to create a new array or datastructure to store the results of the callback or mutate the original array using a method like .push.





2. Explain the difference between a callback and a higher order function.
>  Higher order functions are functions that operate on other  functions, either by taking them as arguments or by returning them.For example; Array.prototype.map, Array.prototype.filter and  Array.prototype.reduce are some of the Higher-Order functions  built into the JavaScript language. Callbacks on the other hand are functions that are passed into higher order functions as parameters.





3. What is closure?
> Closure is really just when a nested function has access to or even changes the value of a variable declared in the scope of the outer function which contains both the variable in question and the inner function inside that is using it within the more deeply nested scope. The reason it's an interview question is because we can use it to create private state.
 ```js
const bankAccount = (initialBalance) => {
  const balance = initialBalance;
  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
  };
};
const account = bankAccount(100);
account.getBalance(); // 100
account.deposit(10); // 110
```

>Since we're not able to access balance from anywhere outside of the bankAccount function,  we've just created a private variable. bankAccount() is returning an Object with a bunch of functions inside it, and yet when we call account.getBalance(), the function is able to "remember" its initial reference to balance. A more technical definition of closure is when a  function "remembers" its lexical scope (scope at compile time ... or whatever the JavaScript equivalent is... when the code is evaluated and an error might be thrown as a result), even when the function is invoked outside that lexical scope. 




4. Describe the four rules of the 'this' keyword.

```
-  Global Object Binding: When "this" is in the global scope, it is referring to the window/console.
-  Implicit Binding: When a function/method is used on an object and "this" is used inside of it, "this" is referring to the object that precedes the dot notation.
-  New Binding: When a new object is being created, "this" refers to the new object that was created.
-  Explicit Binding: When using "call or "apply," "this" is explicitly defined.
 ```
    
5. Why do we need super() in an extended class?

>In essance the super keyword tells us to use the parent's properties and methods with a this context that belongs to the extended child class. In a child class, you use super() to call its parent's constructor and super.<methodName> to access its parent's methods.



You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

Follow these steps to set up your project:

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
NOTE: Tests will run for the JavaScript portion of this challenge only
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2: Project Requirements

Your finished project must include all of the following requirements

#### Task A: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task B: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* Find this challenge in the index.js file. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements! Please remember to comment out your stretch goals before you submit 

## Submission format

See Canvas for submission instructions 

