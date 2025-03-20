import React from 'react'
const heading = {
  fontSize: '72px',
  color: 'red'
}
function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <p>This is an inline component.</p>

    </div>
  )
}

export default Inline