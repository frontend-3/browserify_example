React = require 'react'
ReactDOM = require 'react-dom'

Comment = require './comment.coffee'

ReactDOM.render <Comment message="hola" />, document.getElementById('container')
