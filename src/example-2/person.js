var Person = function () {

    var self = this;

    return {
        getAge : function () {
            return self.age;
        },
        setAge : function (age) {
            self.age = age;
        }
    }
 }
 module.exports = Person;
