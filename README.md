# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ps_yu/lotide`

**Require it:**

`const _ = require('@ps_yu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail`: To find the last element of an array
* `head `: To find the first element of an array
* `middle` : To find the middle element of an array
* `implement countOnly` : Function that takes a collection of items and returns specific subset
* `countLetters` : Function that takes a sentence and returns count of each of the letters in the sentence
* `letterPostions` : Function that takes a string and return all the indices of the letter positions of the string
* `findKeyByValue`: Function that takes in an object and a value and returns the first key that corresponds to the value
* `Map` : Function that takes an array and a callback and returns a new array based on the callback 
