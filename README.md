# Raindrops

Raindrops:
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

## Process
* Add raindrops function that takes 3 and returns 'Pling'
* Add raindrops function that takes 6 and returns 'Pling'
* Refactor Raindrop to evaluate all modulos of 3 to Pling
* Add functionality for Raindrops function evaluate 5 to Plang
* Raindrop function evaluates 10 to Plang
* Refactor Raindrop to evaluate all modulos of 5 to Plang
* Raindrop evaluates 7 to Plong
* Raindrop evaluates 14 to Plong
* Refactor Raindrop to evaluate all modulos of 7 to Plong
* Raindrop function returns argument if it isnt a modulo of 3, 5 or 7
* Refactor raindrop out in to separate functions
