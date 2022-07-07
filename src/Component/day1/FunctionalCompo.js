import React , {useState} from 'react'

function FunctionalComp() {
    const [developer,setDeveloper] = useState("Full Stack");

  return (
    <div>Functional Component
        <h2>{developer}</h2>
        <button onClick={()=>setDeveloper()}>{developer}</button>
    </div>
  )
}

export default FunctionalComp