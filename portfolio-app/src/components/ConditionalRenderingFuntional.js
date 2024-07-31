import React from 'react'

function ConditionalRenderingFuntional(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}

export default ConditionalRenderingFuntional