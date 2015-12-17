Book = () ->
    self = @
    {
        getName : ()->
            self.name
        setName : (name)->
            self.name = name
            return
    }

module.exports = Book


