import { assert, expect } from "chai";


const name = "John Doe";
const age = 25;
const items = ['apple', 'orange', 'banana'];
const user = { id: 1, name: "John Doe", age: 25 }

//using assert

assert.isString(name, "Name should be string")
assert.isNumber(age, "Age should be number");
assert.isArray(items, "Items should be array")

//expect

expect(name).to.be.a("String").that.equals("John Doe")
expect(age).to.be.a("number").that.is.greaterThan(20).and.lessThan(30)
expect(user).to.have.property("name").that.equals("John")