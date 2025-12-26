
import {useState} from "react";



const App = () => {

const submitHandler=(e)=>{
  e.preventDefault()
  console.log(name)
  setName("")

}
const [name, setName] = useState("")


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"  placeholder="enter your name" value={name}
        onChange={(e)=>
          setName(e.target.value)
        } required/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App