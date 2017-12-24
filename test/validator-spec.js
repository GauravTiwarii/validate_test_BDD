/*  USING ONLY MOCHA(test runner) AND ASSERT
var assert = require('assert'),
	validator = require('../lib/validator')


describe('A Validator', function() { 
	it('will return error.nonpositive for not strictly positive numbers', function(){
		assert.deepEqual(validator(0), ['error.nonpositive'])
	})
})
*/

//USING ONLY MOCHA(test runner) AND CHAI(library) using Assertion style 'EXPECT'
/*
var chai = require('chai'),
	expect = chai.expect,
	validator = require('../lib/validator');

describe('A Validator', function() {
	it('will return error.nonpositive for not strictly positive numbers', function(){
		expect(validator(0)).to.be.deep.equal(['error.nonpositive'])
	})
})
*/

//USING ONLY MOCHA(test runner) AND CHAI(library) using Assertion style 'SHOULD'
var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
	validator = require('../lib/validator');


describe('A Validator', function(){

	it('will return no errors for valid numbers', function() {
		expect(validator(7)).to.be.empty;
	})

	describe('will return error.nonpositive for not strictly positive numbers, ', function() {
		it('like 0', function(){
		validator(0).should.be.deep.equal(['error.nonpositive'])
		})

		it('like -2', function(){
			expect(validator(-2)).to.be.deep.equal(['error.nonpositive'])
		})

	})

	describe('will return error.three for divisible by 3 numbers, ', function() {

		it('like 3', function(){
			expect(validator(3)).to.be.deep.equal(['error.three'])
		})

		it('like 6', function()	{
			expect(validator(6)).to.be.deep.equal(['error.three'])
		})
	})

	describe('will return error.five for divisible by 5, ', function(){
		it('like 5', function(){
			expect(validate(5)).to.be.deep.equal(['error.five'])
		})
		it('like 10', function(){
			expect(validate(10)).to.be.deep.equal(['error.five'])
		})
	})


	it('will return one error for each rule of the number', function(){
		expect(validate(15)).to.be.deep.equal(['error.three', 'error.five'])
	})




})


