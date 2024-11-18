import React, { useEffect } from 'react'

function App() {
useEffect(() => {
  fetch ('http://localhost:8081/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}, [])
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
export default App;