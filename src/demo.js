function Person(age) {
    this.nickname = "chen"
    this.sex = "male"
    this.age = age
}

Person.prototype.sayHello = function() {
    return 'hi my name is ' + this.nickname + ' and my age is ' + this.sex
}

Person.prototype.sayAge = function() {
    return this.age
}