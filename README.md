# Raindrops

## Introduction
This is a small console application that takes a given argument and returns 'Pling' if the argument is has a factor of 3, returns 'Plang' if it has a factor of 5, returns 'Plong' if it has a factor or 7, returns 'PlingPlang' if it has both a factor of 3 and 5, returns 'PlingPlong' if it has both a factor of 3 and 7 and returns 'PlangPlong' if it has both a facotr of 5 and 7.

This application is written in Javascript and tested with Jasmine and Karma.

## Specification
Write a function that takes as its input a number (n) and converts it to a string, the contents of which depend on the numbers factors

- if the number has a factor of 3, output 'Pling'
- if the number has a factor of 5, output 'Plang'
- if the number has a factor of 7, output 'Plong'
- if the number does not have any of the above as a factor simply return the numbers digits

Examples:
- 28's factors are 1, 2, 4, 7, 14 and 28: this would be a simple 'Plong'
- 30's factors are 1, 2, 3, 5, 6, 10, 15, 30: this would be a 'PlingPlang'
- 34 has four factors: 1, 2, 17, and 34: this would be '34'

This test can be completed in a language of your choice and should be made available on your github account. You should write tests to cover your expected range of inputs and outputs. Commit often and document well.

## Instructions
To use this application run the following commands:
* `git clone https://github.com/lewmoore/Raindrops.git`
* `cd Raindrops`
* `npm install`
* `open index.html`

To interact with the application open the console with `cmd + alt + j` and create a new instance of `Raindrops` with `raindrops = new Raindrops()` then type `raindrops.raindrops(n)` with `n` being any argument.

To run the tests use `npm test`

## Approach
My approach to this exercise was to keep the code as readable and as simple as possible. As well as this, I also ensured that I
kept my TDD loop as tight as possible to prevent errors. I broke down the problem in to 6 segments. These were:

- How to handle factors of 3
- How to handle factors of 5
- How to handle factors of 7
- How to handle factors of 3 and 5
- How to handle factors of 3 and 7
- How to handle factors of 5 and 7

I wrote a test for each segment and used only the minimum amount of code needed to pass the test and when repetition occured I refactored the code to make it simpler.

I extracted code out in to separate functions to ensure the code stayed readable and easy to follow.


## Process
* Add raindrops function that takes 3 and returns 'Pling'
* Add raindrops function that takes 6 and returns 'Pling'
* Refactor Raindrop to evaluate all modulos of 3 to Pling
* Add functionality for Raindrops function to evaluate 5 to Plang
* Add functionality for Raindrops function to evaluate 10 to Plang
* Refactor Raindrop to evaluate all modulos of 5 to Plang
* Add functionality for Raindrops function to evaluate 7 to Plong
* Add functionality for Raindrops function to evaluate 14 to Plong
* Refactor Raindrop to evaluate all modulos of 7 to Plong
* Raindrop function returns argument if it isnt a modulo of 3, 5 or 7
* Refactor raindrop out in to separate functions
* Add functionality for Raindrops function to evaluate 14 to PlingPlang
* Add functionality for Raindrops function to evaluate 30 to PlngPlang
* Refactor Raindrop to evaluate all modulos of 3 and 5 to return PlingPlang
* Add functionality for Raindrops function to evaluate 21 to PlingPlong
* Add functionality for Raindrops function to evaluate 42 to PlingPlong
* Refactor Raindrop to evaluate all modulos of 3 and 7 to PlingPlong and extract to function
* Add functionality for Raindrops function to evaluate 70 to PlangPlong
* Add functionality for Raindrops function to evaluate 140 to PlangPlong
* Refactor Raindrop to evaluate all modulos of 5 and 7 to PlangPlong
* Add functionality for Raindrops function to return an error if argument is not a number
