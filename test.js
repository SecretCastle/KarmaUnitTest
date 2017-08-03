describe('test person', function() {
    it('console sayHello', function() {
        var p1 = new Person(10)
        expect(p1.sayAge()).toEqual(10)
    })
})