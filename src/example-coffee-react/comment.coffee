React = require 'react'

Comment = React.createClass
    render : ->
        <div className="comment">
            <p>is this component rad? {@props.message}</p>
        </div>

module.exports = Comment

