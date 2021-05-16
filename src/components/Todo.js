import React from 'react'

export default function Todo(props) {
    const { text } = props
    return (
        <div className="card">
          <h2>{text}</h2>
          <div className="actions">
            <button className="btn">Delete</button>
          </div>
        </div>
    )
}
